import React from 'react';
import {Carousel} from 'react-bootstrap'
import './Process.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import img1 from '../Assets/img1.png'
import img2 from '../Assets/img2.png'


function Process() {
    return ( 
    <div>
        <div className="top">
            <h1 className="title">BRK</h1>
            <p className="sub">Electronic Anti-Scale System, No Salt No Chemicals No Maintenance.</p>
            <p className="sub">Residential -Commercial -Industrial</p>
        </div>
        
            <Carousel className="middle">
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
        
        <div className="bottom">
            <h1 className="title">Process</h1>
            
            <p>History
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved con.</p>

            <p>The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved con.</p>

            <p>The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved con.</p>

            <p>The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved conHistory
            The maintenance for these cooling towers previously involved con.</p>

        </div>
    </div> 
    );
}

export default Process;