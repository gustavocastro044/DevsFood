import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: #136713;
  border-radius: 10px;
  padding: 20px;
  justify-content: space-between;
`

export const Logo = styled.img`
  width: auto;
  height: 70px;
`

export const SearchInput = styled.input <{ active?:boolean }>`
  border: 0;
  border-radius: 25px;
  width: ${props=>props.active ? 300 : 0}px;
  height: 50px;
  background-color: white;
  background-image: url('/assets/search.png');
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: 10px center;
  outline: 0;
  padding-left: 50px;
  transition: all ease 0.2s;
  font-size: 15px;
  cursor: pointer;
  &:focus{
    cursor: text;
  }

`