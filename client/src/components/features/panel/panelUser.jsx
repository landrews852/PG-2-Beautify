import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { cleanCart } from "../../../redux/actions";

export default function PanelUser() {
  const dispatch = useDispatch ()
  const location=useLocation().search
  console.log(location)
  if (location.toString()==='?true') dispatch (cleanCart ())  




  return <>En construcción</>;
}
