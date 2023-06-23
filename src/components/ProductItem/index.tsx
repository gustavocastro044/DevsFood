import React from "react";
import { Container, 
  ProductButton, 
  ProductInfoArea,
  ProductIngredients,
  ProductButtonArea,
  ProductName,ProductPhoto,
  ProductPhotoArea,
  ProductPrice } from "./styled";

type Props ={
  data: any
}

export const ProductItem = ({data}: Props) =>{
  return(
    <Container>
      <ProductPhotoArea>
        <ProductPhoto src={data.image} />
      </ProductPhotoArea>

      <ProductInfoArea>
        <ProductName>{data.name}</ProductName>
        <ProductPrice>R${data.price}</ProductPrice>
        <ProductIngredients>{data.ingredients}</ProductIngredients>
      </ProductInfoArea>
      
      <ProductButtonArea>
        <ProductButton src="/assets/next.png"/>
      </ProductButtonArea>
    </Container>
  )
}


export default ProductItem