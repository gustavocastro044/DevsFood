import styled from 'styled-components'

export const Container = styled.div< {status: boolean}>`
  display: ${props => props.status? 'flex' : 'none'};
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 900;
  justify-content: center;
  align-items: center;
`
export const ModalBody = styled.div`
   width: 300px;
   height: 300px;
   background-color: white;
   border-radius: 20px;
   box-shadow: 0px 0px 50px #000;
   max-height: 90vh;
   overflow: auto;
`