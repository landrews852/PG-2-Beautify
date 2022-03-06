import React from "react";
import AdminSideBar from "../adminSideBar/adminSideBar";
import s from './configPage.module.css'
import { Outlet } from "react-router-dom";

export default function ConfigPage() {
  let user = 'admin'

  return (
    <div className={s.container}>
        <div className={s.sidebar}>
            {/* {user === 'admin' ? (
                <AdminSideBar/> 
            ) : (
                <ClientSideBar/>
            )} */}
        </div>
        <div className={s.panel}>
            <Outlet></Outlet>
        </div>
    </div>
  );
}