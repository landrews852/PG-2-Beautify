import React from 'react';
import s from './reviews.module.css'


export default function Reviews (props) {


    return (
        <>
        <div className={s.container}>
            <h3>Autor: {props.author} </h3>
            <h3>Fecha de publicación: {props.created}</h3>
            <h3>Puntaje: X X X</h3>
            <div className={s.textreview}>
                {props.review}
            </div>
        </div>
        </>
        
    )

}