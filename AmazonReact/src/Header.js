import React, { useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Sidebar from './Sidebar';


function Header({tata}) {
    //basket.length
    const [{basket, user}] = useStateValue();
    const [side, setStyle] = useState(false);

    // console.table("clg header basket" + basket)
    const login= ()=> {
        if (user) {
            auth.signOut();
        }
    }

    const affiche =()=>{
        setStyle(!side)
        console.log(side)
    }

    // on execute la props mere en l'appelant dans la fille onClick={tata} car c'est une fonction donc elle s'execute  
    return (
        <nav className="header">
            <button className="header__hamb" onClick={tata}> &#9776; </button>
           {/* onClick étant ds un html il refere au js pas de props en composant*/}
           
           
            {/* logo */}
            <Link to="/">
                <img className="header__logo" src="https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png" alt="amazon logo" />
            </Link>
            {/* Search */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            {/* 3 links */}
            <div className="header__nav">

                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user?.email} </span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In' } </span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Return</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
             
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link" >
                    <div className=".header__optionBasket">
                        <ShoppingBasketIcon className="" />

                        <span className="header__optionLineTwo  header__basketCount"> {basket?.length} </span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
