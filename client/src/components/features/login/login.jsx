import React from 'react';
import { Formik } from 'formik';
import { useAuth0 } from '@auth0/auth0-react'
import './login.css';
import axios from 'axios';
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

	const {loginWithPopup, logout, user, isAuthenticated, getAccessTokenSilently} = useAuth0()
	
	const callApi = async () => {
		const reqnoprot = await axios.get("http://localhost:3001/api/client")
		console.log(reqnoprot.data);
	}

	const callprotectedApi = async () => {
		try {
		const token = await getAccessTokenSilently()
		const response = await axios.get("http://localhost:3001/api/client/protected", {
			headers: {
				authorization: `Bearer ${token}`
			}
		})
		console.log(response.data)
		}
		catch(error){
			console.log(error)
		}
			
	}

	

	return (
        <>  
			<button onClick={loginWithPopup}>Log in</button>
			<button onClick={logout}>Log out</button>
			<button onClick={callApi}>No protedigo</button>
			<button onClick={callprotectedApi}>Protegido</button>
			<h2>User is {isAuthenticated?'Logged in' : 'Not Logged in'}</h2>
      			{isAuthenticated &&
      		<pre> {JSON.stringify(user,null,2)} </pre>
			  }
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