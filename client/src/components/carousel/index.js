import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Slideshow ()  {
    const arrcarrusel= [
        {
          img: "https://images2.revistafama.com/tJ9jvfPWHSF_Hs1D2yz6-NBaHp0=/958x596/uploads/media/2019/07/03/que-son-las-pestanas-de-1.jpg",
          label: 'First slide label',
          text: 'Lo que sea 1 '  
        },
        {
            img: "https://media.glamour.mx/photos/619051d02d97bd4c522a2691/master/w_1600,c_limit/260880.jpg",
            label: 'Second slide label',
            text: 'Lo que sea 2 '  
        },
        {
            img: "https://images.ecestaticos.com/ECoBIlRtrxVxWqNbrCW8zJo7zIo=/18x6:2268x1247/1440x810/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F719%2F5c8%2Fb3f%2F7195c8b3f1e6d69995db09a01eb672bd.jpg",
            label: 'Third slide label',
            text: 'Lo que sea 3 '  
        },
        
    ]

    return (
        <div>   
<Carousel>
    { 
        arrcarrusel.map ((e)=>{          
        return ( 
           <Carousel.Item>
                <img
                className="d-block w-100" width="100%" height="400px"
                src={e.img}
                alt="First slide"/>
            <Carousel.Caption>
                <h3>{e.label}</h3>
                <p>{e.text}</p>
            </Carousel.Caption>
            </Carousel.Item>
        )})
    }

    
{/*     <Carousel.Item>
        <img
        className="d-block w-100" width="100%" height="400px"
        src="https://images2.revistafama.com/tJ9jvfPWHSF_Hs1D2yz6-NBaHp0=/958x596/uploads/media/2019/07/03/que-son-las-pestanas-de-1.jpg"
        alt="First slide"
        />
        <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100" width="100%" height="400px"
        src="https://media.glamour.mx/photos/619051d02d97bd4c522a2691/master/w_1600,c_limit/260880.jpg"
        alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100" width="100%" height="400px"
        src="https://images.ecestaticos.com/ECoBIlRtrxVxWqNbrCW8zJo7zIo=/18x6:2268x1247/1440x810/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F719%2F5c8%2Fb3f%2F7195c8b3f1e6d69995db09a01eb672bd.jpg"
        alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
    </Carousel.Item> */}
</Carousel>
        </div>
    )
}