import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './assets/logo.png';
import "./Header.css"
import { faCartShopping, faMagnifyingGlassLocation, faPlane } from '@fortawesome/free-solid-svg-icons';
import { Outlet, useNavigate } from 'react-router-dom';
function Header() {
    const router = useNavigate()
    const loginfun = (value: any) => {
        router(value)
    }

    return (
        <>
            <div className="overall">
                <div className='top'>
                    <div className="flip-logo">
                        <img src={logo} alt="Flipkart Logo" className='logo-img' />
                        <p className="fst-italic logo-name">Flipkart</p>
                    </div>

                    <div className='travel-logo'>
                        <FontAwesomeIcon icon={faPlane} />
                        <span className="fst-italic"> Travel</span>
                    </div>

                    <div className="location">
                        <FontAwesomeIcon icon={faMagnifyingGlassLocation} />
                        <span className="loc">Select delivery location </span>
                    </div>
                </div>

                <div className="middle">
                    <form className="d-flex search-box">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <input className="form-control me-2 inp" type="search"
                            placeholder="Search for Products, Brands and More" aria-label="Search" />
                    </form>

                    <div className="icons">
                        <div>
                            <i className="fa fa-user-o" aria-hidden="true"></i>
                            <button className='btn-login' onClick={() => loginfun('/login')}>Login</button>
                        </div>
                        <div>
                            <span>More</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faCartShopping} />
                            <button className='btn-cart' onClick={() => loginfun('/cart')}>Cart</button>                        </div>
                    </div>
                </div>
            </div>

            <Outlet></Outlet>
        </>

    )
}


export default Header