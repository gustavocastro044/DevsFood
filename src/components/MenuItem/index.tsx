import React from 'react'
import { LinkArea, LinkIcon } from './styled'
import { Link, useLocation } from 'react-router-dom'

type Props = {
  icon: string
  link: string
  title:string
}

export const MenuItem = ({title,icon, link}: Props) =>{
  const location = useLocation()

  let isActive : boolean = location.pathname === link;

  return(
    <LinkArea data-tooltip-id="tip-right" data-tooltip-content={title} active={isActive}  >
      <Link to={link}>
      <LinkIcon src ={icon}/>
      </Link>
    </LinkArea>
  )
}

export default MenuItem