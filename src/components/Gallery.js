import React, { useState, useMemo, useReducer, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Photos from './Photos';
import Modal from './Modal';
import Filter from './Filter';
import { photoReducer, movePhoto } from '../reducers/photoReducer';

const Gallery = ({ photos }) => {
  const [filter, setFilter] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photoState, dispatch] = useReducer(photoReducer, photos);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredPhotos = useMemo(() => {
    if (filter === 'all') return photoState;
    return photoState.filter(photo => photo.category === filter);
  }, [filter, photoState]);

  const handlePhotoClick = (photo, index) => {
    setSelectedPhoto(photo);
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;

      if (e.key === 'ArrowRight') {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % filteredPhotos.length);
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prevIndex) => (prevIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, filteredPhotos]);

  useEffect(() => {
    if (selectedIndex !== null) {
      setSelectedPhoto(filteredPhotos[selectedIndex]);
    }
  }, [selectedIndex, filteredPhotos]);

  return (
    <DndProvider backend={HTML5Backend}>
      <Filter setFilter={setFilter} />
      <div className="gallery">
        {filteredPhotos.map((photo, index) => (
          <Photos
            key={photo.id}
            index={index}
            photo={photo}
            onClick={() => handlePhotoClick(photo, index)}
            movePhoto={(sourceIndex, targetIndex) => dispatch(movePhoto(sourceIndex, targetIndex))}
          />
        ))}
      </div>
      {selectedPhoto && <Modal photo={selectedPhoto} onClose={closeModal} />}
    </DndProvider>
  );
};

export default Gallery;
