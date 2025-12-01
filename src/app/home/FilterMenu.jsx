import React from 'react'
import Menu from './Menu'

const FilterMenu = ({menus, categorys}) => {

  return (
    <div>
        <Menu menus={menus} categorys={categorys}></Menu>
    </div>
  )
}

export default FilterMenu