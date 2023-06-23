

const BASE = 'https://api.b7web.com.br/devsfood/api'

type Props ={
activeCategory: any
activePage: any
activeSearch: any
}

export const getCategories = async () =>{
  const res = await fetch(BASE+'/categories')
  const json = await res.json()
  return json
}
export const getProducts = async({activeCategory, activePage, activeSearch}: Props) =>{
  let fields ={
    category:"0",
    page:"0",
    search:"0"
  };
  if(activeCategory !== 0){
    fields.category = activeCategory
    fields.category = fields.category.toString()
  }
  if(activePage > 0){
    fields.page = activePage
    fields.page = fields.page.toString()
  }
  if(activeSearch !== 0){
    fields.search = activeSearch
    fields.search = fields.search.toString()
  }

  let queryString = new URLSearchParams(fields)

  const res = await fetch(BASE+'/products?'+queryString)
  const json = await res.json()
  return json 
}

export default getCategories