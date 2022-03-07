import React from 'react';
import s from './reviews.module.css'


export default function Reviews (props) {



    return (
        <>
        <div className={s.container}>
            <h3>Autor: {props.author} </h3>
            <h3>Fecha de publicación: {props.created.slice(0,10).split("-").reverse().join("-")}</h3>
            <h3>Puntaje: {props.rank}</h3>
            <div className={s.textreview}>
                {props.review}
            </div>
        </div>
        </>
        
    )

}