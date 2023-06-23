import React from 'react'
import { Container, CategoryImage } from './styled'

type Props ={
  data: any
  activeCategory: number
  setActiveCategory: any
}

export const CategoryItem =({data, activeCategory, setActiveCategory}: Props)=>{
  const handleCategoryClick = () =>{
    setActiveCategory(data.id)
  }

  return(
    <Container active={activeCategory} id={data.id} onClick={handleCategoryClick}>
      <CategoryImage src={data.image} 
      data-tooltip-id="tip-top" 
      data-tooltip-content={data.name ? data.name : data.title} />
    </Container>
  )
}