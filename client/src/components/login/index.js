import React from 'react';
import './login.css';

export default function Login () {
    
	var falso = false
	const handleCheck = (e) => {
		e.preventDefault();
		
	}
	const handleClickCreate = (e) => {
		e.preventDefault();
		let check = document.getElementsByClassName("checkbox");		
		check[0].checked=true;		
	}
	const handleClickLogin = (e) => {
		e.preventDefault();
		let check = document.getElementsByClassName("checkbox");		
		check[0].checked=false;		
	}
	
	return (
        <>  

	<div className="sectionwraper">
		<div className="containerlogin">
			<div className="row justify-content-center">
				<div className="col-12 text-center align-self-center">
					<div className="section pb-5 pt-5 pt-sm-2 text-center">
						<h6 className="mb-0 pb-3"><button onClick={(e) => handleClickLogin(e)}>Ingresar</button><button onClick={(e) => handleClickCreate(e)}>Crear cuenta</button></h6>
			          	<input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label htmlFor="reg-log"></label>
						<div className="card-3d-wrap mx-auto">
							<div className="card-3d-wrapper">
								<div className="card-front">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3">Ingresar</h4>
											<div className="form-group">
												<input type="email" name="logemail" className="form-style" placeholder="Tu E-mail" id="logemail" autoComplete="off" />
												<i className="input-icon uil uil-at"></i>
											</div>	
											<div className="form-group mt-2">
												<input type="password" name="logpass" className="form-style" placeholder="Tu contraseña" id="logpass" autoComplete="off" />
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
											<button className="btn mt-4">Ingresar</button>
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
											<button className="btn mt-4">Crear</button>
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
	</div>

        </>
    )
}