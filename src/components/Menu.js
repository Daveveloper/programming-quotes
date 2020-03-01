import React from 'react'
import {FaHeart, FaHome} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Menu = ({path}) => {

  return (
    <nav className="Menu">
      <ul className="Menu-list">
        <li className={"Menu-item"} >
          <Link to="/">
            <FaHome className="svg" color="white"/> Home
          </Link>
        </li>
        <li className="Menu-item">
          <Link to="/favorites">
            <FaHeart className="svg" color="red"/> Favorites
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
