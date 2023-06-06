import {
    ModalContainer,
    ModalContent,
    CloseButton,
} from './styles'

export function Modal({isOpen, onClose, title, children}:any) {
    if(!isOpen) {
        return null
    }

    return (
       <ModalContainer>
        <ModalContent>
            <CloseButton onClick={onClose}>&times</CloseButton>
            <h2>{title}</h2>
            <div>{children}</div>
        </ModalContent>
       </ModalContainer>
    )
}