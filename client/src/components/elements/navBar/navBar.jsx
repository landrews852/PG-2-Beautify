import React, { useEffect } from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../images/logo2.png';
import SearchBar from '../../features/searchbar/searchBar';
import { getUserInfo } from '../../../redux/actions';
import CartLogo from './cartLogo';
import s from "./navBar.module.css";
import UserMenu from '../../elements/userMenu/userMenu';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import Login from '../../features/login/login';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';


export default function Navigator () {
  const { isAuthenticated, getAccessTokenSilently, isLoading } = useAuth0();
  const dispatch = useDispatch()
  useEffect (async ()=>{        
		if(isAuthenticated){ 
			const token = await getAccessTokenSilently();		    
			dispatch(getUserInfo(token))        
    }   
    },[isAuthenticated]);

    const userstate = useSelector(state => state.user)
    console.log("userstate",userstate)
    let location = useLocation()
    const user = JSON.parse(localStorage.getItem('user'));
    const clientname = userstate[0]?"Bienvenido" + " " + userstate[0].name_client:""
    const [log,setLog] = useState(0)  
    
    

  return (
    <Navbar className={s.navBarr} variant="light" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand><img src={logo} height="100px" alt="logo" /></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={s.me_auto}>
            <Link to="/aboutUs" className='nav-link'>Quienes somos</Link>
            <Link to="/market" className='nav-link'>Productos</Link>
            <Link to="/services" className='nav-link'>Servicios</Link>
            <Login />
            
          </Nav>
          {location.pathname !== "/" ? (
            <SearchBar className={s.navSearch} />
          ) : null}

          <CartLogo />
          <UserMenu user={user} />
          <span className={s.welcome}>{isAuthenticated?clientname:""}</span>          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}