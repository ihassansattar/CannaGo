import React from 'react'
//logo
import logo from '../images/logo.png'
import cannabisImg from '../images/cannabis-img.png'
import bagIcon from '../images/bag-icon.svg'
import userIcon from '../images/user-icon.svg'

import { RiMenu4Fill } from 'react-icons/ri'


const Navbar = () => {

    const [navbarIsOpen, setNavbarIsOpen] = React.useState(false)

    const toggleNavbar = () => setNavbarIsOpen(!navbarIsOpen)

    return (
        <nav className="navbar">
            {/*Cannabis img*/}
            <img src={cannabisImg} alt="cannabis-img" className="cannabis-img" />

            <div className="container">
                <div className="navbar-wrapper">
                    <a href="/" className="logo">
                        <img src={logo} alt="logo-img" />
                    </a>
                    <ul className={`nav__list ${navbarIsOpen && "show"}`}>
                        <li className="nav__list-item active">
                            <a href="/" className="nav__list-link">Shop</a>
                        </li>
                        <li className="nav__list-item">
                            <a href="/" className="nav__list-link">follow us</a>
                        </li>
                        <li className="nav__list-item">
                            <a href="/" className="nav__list-link">about us</a>
                        </li>
                        <li className="nav__list-item">
                            <a href="/" className="nav__list-link">blog</a>
                        </li>
                        <li className="nav__list-item">
                            <a href="/" className="nav__list-link">press</a>
                        </li>
                        <li className="nav__list-item">
                            <a href="/" className="nav__list-link">faq</a>
                        </li>
                        <li className="nav__list-item">
                            <a href="/" className="nav__list-link">contact us</a>
                        </li>
                        <li className="nav__list-item">
                            <a href="/" className="nav__list-link">careers</a>
                        </li>
                        <li className="nav__list-item nav-link-icon">
                            <a href="/" className="nav__list-link">
                                <img src={bagIcon} alt="bag-icon" />
                            </a>
                        </li>
                        <li className="nav__list-item nav-link-icon">
                            <a href="/login" className="nav__list-link">
                                <img src={userIcon} alt="user-icon" />
                                SignIn
                            </a>
                        </li>
                    </ul>

                    <div className="btn-toggle" onClick={toggleNavbar}>
                        <RiMenu4Fill />
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
