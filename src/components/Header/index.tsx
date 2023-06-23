import React, {useState} from 'react'
import { Container, Logo, SearchInput } from './styled'

type Props ={
  search : string
  onSearch: (search : string) => void
}

export const Header = ({search, onSearch}: Props) =>{
  const [inputActive, setInputActive] = useState(search === '' ? false : true)

  const handleInputFocus = () =>{
    setInputActive(true)
  }
  const handleInputBlur = () =>{
    if(search === ''){
      setInputActive(false)
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    onSearch(e.target.value)
  }

  return(
    <Container>
      <Logo src='/assets/logo.png'/>
      <SearchInput onFocus={handleInputFocus}
        active={inputActive}
        onBlur={handleInputBlur}
        value={search}
        onChange={handleChange}
        type ="text" 
        placeholder = "Digite um produto" />
    </Container>
  )
}

export default Header