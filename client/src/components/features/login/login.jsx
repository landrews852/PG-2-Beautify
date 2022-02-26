import React, { useMemo } from 'react';
import { Formik } from 'formik';
import { useAuth0 } from '@auth0/auth0-react'
import './login.css';
import axios from 'axios';
import { getUserInfo } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login () {
    
	
	// const handleClickCreate = (e) => {
	// 	e.preventDefault();
	// 	let check = document.getElementsByClassName("checkbox");		
	// 	check[0].checked=true;		
	// }
	// const handleClickLogin = (e) => {
	// 	e.preventDefault();
	// 	let check = document.getElementsByClassName("checkbox");		
	// 	check[0].checked=false;		
	// }

	const {loginWithPopup, logout, user, isAuthenticated, getAccessTokenSilently} = useAuth0();

	const dispatch = useDispatch();
	const navigate = useNavigate();

    useEffect (async ()=>{        
		if(isAuthenticated){ 
			const token = await getAccessTokenSilently();
		    dispatch(getUserInfo(token))
			.then(u => {
				const user = JSON.parse(localStorage.getItem('user'));
				if(!user.length){
					return navigate("/admin/client/create")
				}
			})
		}
    },[isAuthenticated])

	
	
	const logger = (state) =>{
		if(state === 'Login') return loginWithPopup();
		else{
			logout();
			localStorage.clear();
		}
	}

	return (
        <>  
			
			<button onClick={(e) => logger(e.target.textContent)} >{isAuthenticated?"Logout":"Login"}</button>
			{/* <button onClick={callprotectedApi}>protected</button> */}
			
			  
	{/* <div className="sectionwraper">
		<div className="containerlogin">
			<div className="row justify-content-center">
				<div className="col-12 text-center align-self-center">
					<div className="section pb-5 pt-5 pt-sm-2 text-center">
						<h6 className="mb-0 pb-3"><button onClick={(e) => handleClickLogin(e)}>Ingresar</button><button onClick={(e) => handleClickCreate(e)}>Crear cuenta</button></h6>
			         
				
					 <input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label htmlFor="reg-log"></label>
						<div className="card-3d-wrap mx-auto">
							<div className="card-3d-wrapper">
						<Formik
							onSubmit = {() => {
							console.log("Formulario enviado");
							}}
						>
						 {( { handleSubmit } ) => ( 
							<form onSubmit={() => {handleSubmit()}}>	
								<div className="card-front">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3">Ingresar</h4>
											<div className="form-group">
												<input type="text" name="logemail" className="form-style" placeholder="Tu E-mail" id="logemail" autoComplete="off" />
												<i className="input-icon uil uil-at"></i>
											</div>	
											<div className="form-group mt-2">
												<input type="password" name="logpass" className="form-style" placeholder="Tu contraseña" id="logpass" autoComplete="off" />
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
											<button type='Submit' className="btn mt-4">Ingresar</button>
                            				<p className="mb-0 mt-4 text-center"><a href="#0" className="link">¿Olvidaste tu contraseña?</a></p>
				      					</div>
			      					</div>
                                        <div className="screen__background">
                                            <span className="screen__background__shape screen__background__shape4"></span>
                                            <span className="screen__background__shape screen__background__shape3"></span>		
                                            <span className="screen__background__shape screen__background__shape2"></span>
                                            <span className="screen__background__shape screen__background__shape1"></span>
                                        </div>      
			      				</div>
							</form>	
							
						)}
						</Formik>	  								  
								<div className="card-back">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3">Crear cuenta</h4>
											<div className="form-group">
												<input type="text" name="logname" className="form-style" placeholder="Nombre completo" id="logname" autoComplete="off" />
												<i className="input-icon uil uil-user"></i>
											</div>	
											<div className="form-group mt-2">
												<input type="email" name="logemail" className="form-style" placeholder="Tu E-mail" id="logemail" autoComplete="off" />
												<i className="input-icon uil uil-at"></i>
											</div>	
											<div className="form-group mt-2">
												<input type="password" name="logpass" className="form-style" placeholder="Tu contraseña" id="logpass" autoComplete="off" />
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
											<button type="submit" className="btn mt-4">Crear</button>
				      					</div>
			      					</div>
                                      <div className="screen__background">
                                            <span className="screen__background__shape screen__background__shape4"></span>
                                            <span className="screen__background__shape screen__background__shape3"></span>		
                                            <span className="screen__background__shape screen__background__shape2"></span>
                                            <span className="screen__background__shape screen__background__shape1"></span>
                                        </div> 
			      				</div>
			      			</div>
			      		</div>
					</div>
		      	</div>
	      	</div>
	    </div>
	</div>  */}

        </>
    )
}