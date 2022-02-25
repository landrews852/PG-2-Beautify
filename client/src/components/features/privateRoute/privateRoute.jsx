import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";


export default function PrivateRoute({children}){

    const { component } = useParams();
    const { isAuthenticated } = useAuth0();
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
  
  if (isAuthenticated && user[0].admin){
    switch (component) {
      case 'createProduct':
        return children[0]
      
      case 'createService':
        return children[1]

      default:
        return 'Not Found 404'
    }       
  }
  else return <Navigate to='/login'/>

}