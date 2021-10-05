import './footer.css';
import {Container, Row, Col} from 'react-bootstrap';

import footerItems from '../../resources/Footer.png';
import descrBlack from '../../resources/Beanslogoblack.svg';


const Footer = () => {
    return (
        <div className="bgItem__4">
           <Container>
            <Row>
                <Col>
                  
                  <div className="footer">
                      <img src={footerItems} alt="footerItems" className="footer__items" />
                      <img src={descrBlack} alt="descrBlack" className="footer__icon" />          
                  </div>        
                </Col>
            </Row>
           </Container>
        </div>
        
        
        
    )
}

export default Footer;