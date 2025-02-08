import React from 'react';

const Modal = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                <h2>{title}</h2>
                <p>{content}</p>
                <button onClick={onClose} className="modal-close-btn">Close</button>
            </div>
        </div>
    );
};

export default Modal;
