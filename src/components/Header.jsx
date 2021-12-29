import React, {useState, useContext} from 'react';
import "@styles/Header.scss";
import IconMenu from '@icons/icon_menu.svg';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import Logo from '@logos/logo_yard_sale.svg';
import Shopping from '@icons/icon_shopping_cart.svg';
import AppContext from '../context/AppContext';

const Header =()=>{

    const {state} = useContext(AppContext); 
    const [toggleOrders, setToggleOrders] = useState(false);
    const [toggle, setToggle] = useState(false);

    const handleToggle =()=>{
        setToggle(!toggle)
    }

    return (
        <nav>
            <img src={IconMenu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={Logo} alt="logo" className="nav-logo" />
                <ul>
                    <li> <a href="/">All</a> </li>
                    <li> <a href="/">Clothes</a> </li>
                    <li> <a href="/">Electronics</a> </li>
                    <li> <a href="/">Furnitures</a> </li>
                    <li> <a href="/">Toys</a> </li>
                    <li> <a href="/">Others</a> </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li onClick={handleToggle}
                        className="navbar-email">
                            platzi@example.com
                    </li>
                    <li onClick={()=>setToggleOrders(!toggleOrders)}
                        className="navbar-shopping-cart">
                        <img src={Shopping} alt="shopping cart" />
                        <div>{state.cart.length}</div>
                    </li>
                </ul>
            </div>
            { toggle && <Menu/> }            
            { toggleOrders && <MyOrder/>}
        </nav>);
}

export default Header;