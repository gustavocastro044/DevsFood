import React from 'react'
import { Container, ModalBody } from './styled'

type props={
  children: any
  status:boolean
  setStatus: (status : boolean) => void
}

export const Modal = ({status, children, setStatus}: props) =>{
  const handleModalStatus = (e: any) =>{
    if(e.target.classList.contains('modalBg')){
      setStatus(false)
    }
  }
  return(
    <Container className='modalBg' status={status} onClick={handleModalStatus}>
      <ModalBody>
        {children}
      </ModalBody>

    </Container>
  )
}

export default Modal