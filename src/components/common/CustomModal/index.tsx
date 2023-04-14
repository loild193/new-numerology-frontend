import React, { FC, ReactNode, useEffect } from 'react'
import ReactModal, { Styles } from 'react-modal'
import styles from '../../../../styles/components/CustomModal.module.css'

const Modal = ReactModal as any

const customStyles: Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 150,
    padding: 0,
    background: 'transparent',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(26, 26, 26, 0.1)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    zIndex: 150,
  },
}

export interface Props {
  children: ReactNode
  isOpen: boolean
  isFixedPosition?: boolean
  closeTimeoutMS?: number
  optionalStyle?: Styles
  onAfterOpen?: () => void
  onRequestClose: () => void
}

Modal.setAppElement('#__next')

const CustomModal: FC<React.PropsWithChildren<Props>> = ({
  children,
  isOpen,
  isFixedPosition = false,
  onAfterOpen,
  onRequestClose,
  closeTimeoutMS = 200,
  optionalStyle = {},
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.height = '100vh'
      document.body.style.width = '100%'
      if (isFixedPosition) {
        document.body.style.overflow = 'hidden'
        document.body.style.position = 'fixed'
      }
    } else {
      document.body.style.height = 'unset'
      document.body.style.overflow = 'unset'
      document.body.style.position = 'unset'
    }
  }, [isOpen])

  return (
    <Modal
      closeTimeoutMS={closeTimeoutMS}
      contentLabel=""
      isOpen={isOpen}
      style={{ ...customStyles, ...optionalStyle }}
      className={styles.modalContent}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
    >
      {children}
    </Modal>
  )
}

export default React.memo(CustomModal)
