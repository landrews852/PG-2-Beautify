import React from "react";
import s from './adminSideBar.module.css'

export default function AdminSideBar() {
  let user = 'admin'

  return (
    <div className={s.container}>
        Soy AdminSideBar
    </div>
  );
}