import React,{useState} from 'react'
//logo
import logo from '../images/logo.png'
import cannabisImg from '../images/cannabis-img.png'
import bagIcon from '../images/bag-icon.svg'
import userIcon from '../images/user-icon.svg'
import {useHistory} from "react-router-dom";
import {RiMenu4Fill} from 'react-icons/ri'
import OrderIcon from '../images/order-status.png'

const Navbar = () => {
    let history = useHistory();
    const Shop = () => {
        history.push("/storeonline");
    }
    const Home = () => {
        history.push("/");
    }
    const Cart = () => {
        history.push("/emptycart");
    }
    const status =() =>{
        history.push("/orderstatus");
    }
    const login =() =>{
        history.push("/login");
    }
    const [navbarIsOpen,
        setNavbarIsOpen] = useState(false)

    const toggleNavbar = () => setNavbarIsOpen(!navbarIsOpen)

    return (
        <nav className="navigation-bar">
            {/*Cannabis img*/}
            <img src={cannabisImg} alt="cannabis-img" className="cannabis-img"/>

            <div className="my-container">
                <button className="check-order" onClick={status}>
                    <img src={OrderIcon}/>
                    <p>Check your order status</p>
                </button>
                <div className="navigation-wrapper">
                    <a onClick={Home} className="logo pointer">
                        <img src={logo} alt="logo-img"/>
                    </a>
                    <ul className={`nav-list  ${navbarIsOpen && "show"}`}>
                        <li className="nav-list-item  active">
                            <a onClick={Shop} className="nav-list-link  pointer">Shop</a>
                        </li>
                        <li className="nav-list-item ">
                            <a href="/" className="nav-list-link ">follow us</a>
                        </li>
                        <li className="nav-list-item ">
                            <a href="/" className="nav-list-link ">about us</a>
                        </li>
                        <li className="nav-list-item ">
                            <a href="/" className="nav-list-link ">blog</a>
                        </li>
                        <li className="nav-list-item ">
                            <a href="/" className="nav-list-link ">press</a>
                        </li>
                        <li className="nav-list-item ">
                            <a href="/" className="nav-list-link ">faq</a>
                        </li>
                        <li className="nav-list-item ">
                            <a href="/" className="nav-list-link ">contact us</a>
                        </li>
                        <li className="nav-list-item ">
                            <a href="/" className="nav-list-link ">careers</a>
                        </li>
                        <li className="nav-list-item  nav-link-icon">
                            <a onClick={Cart} className="nav-list-link  pointer">
                                <img src={bagIcon} alt="bag-icon"/>
                            </a>
                        </li>
                        <li className="nav-list-item  nav-link-icon">
                            <a onClick={login} className="nav-list-link pointer ">
                                <img src={userIcon} alt="user-icon"/>
                                SignIn
                            </a>
                        </li>
                    </ul>

                    <div className="btn-toggle" onClick={toggleNavbar}>
                        <RiMenu4Fill/>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
