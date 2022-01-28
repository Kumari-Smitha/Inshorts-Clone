import React from 'react'
import './Navbar.css'
import NavbarList from './NavbarList'

export default function Navbar({setCategory}){
    return (
        <div className='nav'>
            <div className='icon'>
                <NavbarList setCategory = {setCategory}/>
            </div>
            <img 
            style={{cursor:'pointer'}}
            src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png'
            height='80%'
            alt = 'logo'
            />
        </div>
    )

}