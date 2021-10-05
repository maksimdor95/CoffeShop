import './appHeader.css';
import {Container, Row, Col} from 'react-bootstrap';
import logo from '../../resources/Logo.svg';

const AppHeader = () => {
    return (

        <Container>
            <Row>
                <Col>
                <header className="app__header">
                    <nav className="app__menu">
                        <ul>
                            <li><a href="#"><img src={logo} alt="logo"/></a></li>
                            <li><a href="#">Our coffee</a></li>
                            <li><a href="#">For your pleasure</a></li>
                        </ul>
                    </nav>
                </header>
                </Col>
            </Row>
        </Container>
        
    )
}

export default AppHeader;