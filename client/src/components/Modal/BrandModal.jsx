import React from 'react';
import './BrandModal.css';

const BrandModal = ({active, setModalActive, children}) => {
    return (
        <div className={active ? 'brand-modal active' : 'brand-modal'} onClick={() => setModalActive(false)}>
            <div className={active ? 'brand-modal__content active' : 'brand-modal__content'} onClick={e => e.stopPropagation()}>
                { children }
            </div>
        </div>
    );
};

export default BrandModal;