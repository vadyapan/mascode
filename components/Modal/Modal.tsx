'use client';
import React, { useState, useEffect, ReactNode, FC } from 'react';
import styles from './Modal.module.css';
import { CloseIcon } from '@/components/Icons/CloseIcon';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ open, onClose, children }) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClose = (): void => {
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modal} onClick={handleClose}>
      <div className={styles.modalContent}>
        {children}
        <button className={styles.closeButton}>{<CloseIcon />}</button>
      </div>
    </div>
  );
};

export default Modal;
