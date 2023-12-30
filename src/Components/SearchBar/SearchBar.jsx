import React from 'react'
import searchIcon from "../Assest/SearchIcon.svg"
import "./SearchBar.css"

export default function SearchBar() {
  return (
    <>
    <div className='searchBar-container'>
        <input type="text" className='searchBar-text-input' placeholder='Search'/>
        <img src={searchIcon} alt="searchIcon_image" className='searchBar-icon'/>
    </div>
    </>
  )
}
