/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react"
import Header from "../../components/Header"
import { Container, CategoryArea, CategoryList, ProductArea, ProductList, ProductPaginationArea, ProductPaginationItem } from "./styled"
import {getCategories, getProducts} from '../../api'
import ProductItem from "../../components/ProductItem"
import { CategoryItem } from "../../components/CategoryItem"
import Modal from "../../components/Modal"

let searchTimer : any = null


export const HomeScreen = () =>{
  const [headerSearch, setHeaderSearch] = useState('')
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [activePage, setActivePage] = useState(1)
  const [activeSearch, setActiveSearch] = useState("")
  const [modalStatus, setModalStatus] = useState(false)

  const getProduct = async () =>{
    const prods = await getProducts({activeCategory, activePage , activeSearch})
    if(prods.error === ""){
      setProducts(prods.result.data)
      setTotalPages(prods.result.pages)
      setActivePage(prods.result.page)
    }
  } 
  useEffect(()=>{
    clearTimeout(searchTimer);
    searchTimer = setTimeout(()=>{
      if(headerSearch !== '' || headerSearch === '' ){
        setActiveSearch(headerSearch)
      }
    }, 500)
  },[headerSearch])


  useEffect(()=>{
    const pegarCategories = async () =>{
      const cat = await getCategories()
      if(cat.error === ''){
        setCategories(cat.result)
      }
    
    }
    pegarCategories()
  },[categories.length])


  useEffect(()=>{
    getProduct()
    setProducts([])
  },[activeCategory, activePage, activeSearch])

  return(
    <Container>
      <Header search={headerSearch} onSearch={setHeaderSearch}/>

      {categories.length > 0 &&
        <CategoryArea>
            Selecione uma categoria
            <CategoryList>
              <CategoryItem data={{id:0, 
              title:'Todas as categorias', 
              image:'/assets/food-and-restaurant.png'
            }}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              />
              {categories.map((item,index)=>(
                <CategoryItem 
                key ={index} 
                data={item}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                />
              ))}
              

            </CategoryList>
        </CategoryArea>
      }

      {products.length > 0 &&
        <ProductArea>
          <ProductList>
          {products.map((item, index)=>(
            <ProductItem
              key={index}
              data={item}
            />
          ))}

          </ProductList>
        </ProductArea>
      }
      {totalPages > 0 &&
        <ProductPaginationArea>
          {Array(totalPages).fill(0).map((item,index)=>(
            <ProductPaginationItem 
            key={index}
            active={activePage}
            current={index + 1}
            onClick={()=> setActivePage(index + 1)}
            >
              {index + 1}
            </ProductPaginationItem>
          ))}
        </ProductPaginationArea>
      }
      <Modal status={modalStatus} setStatus={setModalStatus}>
        conteudo do modal
      </Modal>
    </Container>
  )
}

export default HomeScreen