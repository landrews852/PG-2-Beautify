import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";


export default function PrivateRoute({children}){

    const { component } = useParams();
    const { isAuthenticated } = useAuth0();
    const user = JSON.parse(localStorage.getItem('user'));
   
  
  if (isAuthenticated){
    if (user&&user[0].admin){
    return children[0]
    }
    else if(isAuthenticated){
    return children[1]
  }
  else return <Navigate to='/'/>
 } 
}