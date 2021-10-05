import './sectionOnUs.css';
import {Container, Row, Col} from 'react-bootstrap';
import AppHeader from '../appHeader/appHeader';
import descr from '../../resources/Beanslogo.svg';



const SectionOnUs = () => {
    return (
        <div className="bgItem">
           <Container>
            <Row>
                <Col>
                  <AppHeader/>
                  <div className="onUs">
                      <div className="onUs__wrapper">
                            <h1 className="onUs__first">
                            Everything You Love About Coffee
                            </h1>
                            <img  className="onUs__descr" src={descr} alt="descr" />
                            <h2 className="onUs__title">
                            We makes every day full of energy and taste
                            <p>Want to try our beans?</p>
                            </h2>
                            <button className="onUs__btn">More</button>  
                      </div>     
                  </div>        
                </Col>
            </Row>
           </Container>
        </div>
        
        
        
    )
}

export default SectionOnUs;