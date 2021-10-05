import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/app/App';


ReactDOM.render(
  <StrictMode>
        <App/> 
  </StrictMode>,
  document.getElementById('root')
);

