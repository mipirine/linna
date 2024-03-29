import React from 'react';
import Button from 'react-bootstrap/Button';
//import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
import '../App.css';
import Logo from '../components/Logo';
export const Home = () => {
    const navigate =useNavigate();
    return (
        <>
        
        
        <head className="App-header main">
        <div className="etusivu">
        <Logo />  
          
            <h1 style={{fontSize: '100px'}}>Golfmatkat<br />
            hyvässä seurassa</h1>
            
            <h4>Koe upeat golfkohteet ympäri maailman!</h4>
            <Link to="matkat" smooth={true} duration={500}>
                <Button variant='light'>TUTUSTU MATKOIHIN</Button>
            </Link> 
            </div>
        </head>
        <body>
      <div>
      <div id="matkat" className="matkat main">
        {/* <Row>
          <Col xs={12} sm={12} md={12} lg={4} >
            <div className='destLinks'>
              <h1>CostaNavarino</h1>
              <h3 className='greenText'>7. - 14.4.2024</h3>
              <br />
              <h5> Pro Tommi Linnan<br />
              peli- ja opetusmatka Kreikkaan</h5>
              <br />
              <Button className="buttonInBall" onClick={()=> navigate('costaNavarino')}>LUE LISÄÄ</Button>
              <br />
              <br />
            
            </div>
          </Col>

          <Col xs={12} sm={12} md={12} lg={4} >
          <div className="destLinks">
              <h1>Buerto Banus</h1> 
              <h3 className='greenText'>27.10.- 3.11.2024 </h3>
              <br />
              <h5>Pro Tommi Linnan <br />
                matkassa Marbellaan<br />
                </h5>  
                <br />
                <Button className="buttonInBall" onClick={()=> navigate('puertoBanus')}>LUE LISÄÄ</Button>              
                <br />
                <br />
            </div>
          </Col>

          <Col xs={12} sm={12} md={12} lg={4} >
          <div  className="destLinks">
            <h1>La Gomera</h1> 
              <h3 className='greenText'>30.12.2024- 12.01.2025 </h3><br />
              <h5>Pro Tommi Linnan <br />
                matkassa Kanariansaarille<br />
                </h5> 
                <br /> 
                <Button className="buttonInBall" onClick={()=> navigate('laGomera')}>LUE LISÄÄ</Button>
                <br />
                <br />
            </div>
          </Col>
        </Row> */}
        </div>
        </div>
        </body>
      
        </>
    )
}