import React from 'react';
import './modal.css'
const Modal = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <div className="modal" onClick={onClose}>
      <span className="close" onClick={onClose}>&times;</span>
      <img className="modal-content" src={photo.src} alt={photo.alt} />
      
    </div>
  );
};

export default Modal;
