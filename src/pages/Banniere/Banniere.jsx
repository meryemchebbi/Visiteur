import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Banniere.css';
import a from '../../assets/bb.avif';

const Banniere = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={a}
                    alt="First slide"
                    style={{ maxHeight: "600px", width: "auto" }}
                />
                <Carousel.Caption className="text-left caption-container">
                    <div className="fadeIn-text">
                        <h1>Découvrez l'excellence dans   </h1>
                          <h1>chaque détail avec ARTVM</h1>
                        <button className="btn ">View</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            {/* Ajoutez d'autres diapositives ici si nécessaire */}
        </Carousel>
    );
}

export default Banniere;
