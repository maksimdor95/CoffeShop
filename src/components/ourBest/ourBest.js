import './ourBest.css';
import {Container, Row, Col} from 'react-bootstrap';


import coffeeFirst from '../../resources/815O9ktyfUL.png';
import coffeeSecond from '../../resources/91Ryk2gKejL.png';
import coffeeThird from '../../resources/71qBQnpQFYL.png';

const OurBest = () =>{
    return (

        <div className="bgItem__3">
           <Container>
            <Row>
                <Col>
                  <div className="ourBest">
                    <h2 className="ourBest__title">About Us</h2>
                    <div className="ourBest__blocks">
                        <div className="ourBest__item">
                            <img src={coffeeFirst} alt="coffeeFirst" className="ourBest__img" />
                            <div className="ourBest__name">Solimo Coffee Beans 2 kg</div>
                            <div className="ourBest__prise">10.73$</div>
                        </div>
                        <div className="ourBest__item">
                            <img src={coffeeSecond} alt="coffeeFirst" className="ourBest__img" />
                            <div className="ourBest__name">Presto Coffee Beans 1 kg</div>
                            <div className="ourBest__prise">15.99$</div>
                        </div>
                        <div className="ourBest__item">
                            <img src={coffeeThird} alt="coffeeFirst" className="ourBest__img" />
                            <div className="ourBest__name">AROMISTICO Coffee 1 kg</div>
                            <div className="ourBest__prise">6.99$</div>
                        </div>
                        
                    </div>  
                  </div>        
                </Col>
            </Row>
           </Container>
        </div>
        
    )

}

export default OurBest;