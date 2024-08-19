import React, { useRef, useEffect, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const Photos = ({ photo, index, onClick, movePhoto }) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef();

  const [{ isDragging }, dragRef] = useDrag({
    type: 'photo',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'photo',
    hover: (item) => {
      if (item.index !== index) {
        movePhoto(item.index, index);
        item.index = index;
      }
    },
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      });
    });

    observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="photo"
      ref={(node) => dragRef(dropRef(node))}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      onClick={onClick}
    >
      <img ref={imgRef} src={loaded ? photo.src : 'placeholder.jpg'} alt={photo.alt} />
    </div>
  );
};

export default Photos;
