import './textOnUs.css';
import {Container, Row, Col} from 'react-bootstrap';
import descrBlack from '../../resources/Beanslogoblack.svg';

const TextOnUs = () => {
    return (
        <div className="bgItem__2">
           <Container>
            <Row>
                <Col> 
                  <div className="textOnUs">
                       <h2 className="textOnUs__title">About Us</h2>
                       <img  className="textOnUs__descr" src={descrBlack} alt="descr" />
                       <div className="textOnUs__text">
                       Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                        <p></p>
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.
                       </div>
                  </div>           
                </Col>
            </Row>
        </Container>
        </div>

    )
}

export default  TextOnUs;