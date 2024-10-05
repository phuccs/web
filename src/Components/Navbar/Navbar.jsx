import React from 'react'
import './Navbar.css'
import search_icon from '../../assets/search-w.png'
import {Link} from 'react-router-dom'


const Navbar = () => {
  
  return (
    <div className='navbar'>
        <img src="" alt="" className='logo' />
        <ul>
            <li><Link to="/khampha">KHÁM PHÁ</Link> </li>
            <li> <Link to="/congdong">CỘNG ĐỒNG</Link></li>
            <li><Link to="/bomon">BỘ MÔN</Link> </li>
            <li><Link to="/gioithieu">GIỚI THIỆU</Link></li>
        </ul>        
        <div className='search-box'>
            <img src={search_icon} alt="" />
        </div>

    </div>
  )
}

export default Navbar
