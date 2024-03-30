import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import '../App.css';
import Logo from '../components/Logo';
import SocialMedia from '../components/SocialMedia';
import MyModal from '../components/MyModal';

export const Home = () => {            
    const navigate =useNavigate();
    return (
        <>
        <div className="App">
        
        <head className="App-header main">
        
        <div className="etusivu">
        <SocialMedia />
        <Logo />  
          
            <h1 style={{fontSize: '100px'}}>Golfmatkat<br />
            hyvässä seurassa</h1>
            
            <h4>Koe upeat golfkohteet ympäri maailman!</h4>
            <a href="#matkat" smooth={true} duration={500}>
              <Button variant="light">TUTUSTU MATKOIHIN</Button>
            </a> 
               
        </div>
        
        </head>
        <body>
      <div>
            <div id="matkat" className="matkat main" style={{ height: '150rem' }} >
     
        <Row>
          <Col xs={12} sm={12} md={12} lg={4} >
            <div className='destLinks'>
              <h1>CostaNavarino</h1>
              <h3 className='greenText'>7. - 14.4.2024</h3>
              <br />
              <h5> Pro Tommi Linnan<br />
              peli- ja opetusmatka Kreikkaan</h5>
              <br />
              <Button onClick={()=> navigate('costaNavarino')}>LUE LISÄÄ</Button>
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
                <Button onClick={()=> navigate('puertoBanus')}>LUE LISÄÄ</Button>              
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
                <Button onClick={()=> navigate('laGomera')}>LUE LISÄÄ</Button>
                <br />
                <br />
            </div>
          </Col>
        </Row> 
        </div>
        </div>
        <div>
      
        

        <Container className="containerPro">
          <div>
        <h2 className="h2">
            Linnareissuilla opetuksesta<br />
            vastaavat aina ammattilaiset: 
            </h2>
          <Row>
            <Col xs={12} sm={12} md={12} lg={4} >
              <Image src="./images/GolfPro-Tommi-Linna.jpg" width="auto" height="420px" rounded />
              <h5 className="green">GolfPro</h5>
              <h4>Tommi Linna</h4>
              <MyModal name="Tommi Linna" />
              
            </Col>
            <Col xs={12} sm={12} md={12} lg={4} >
              <Image src="./images/GolfPro-Linda-Osala.jpg" width="auto" height="420px" rounded />
              <h5 className="green">GolfPro</h5>
              <h4>Linda Osala</h4> 
              <MyModal name="Linda Osala" />
            
            </Col>
            <Col xs={12} sm={12} md={12} lg={4} >
              <Image src="./images/GolfPro-Teemu-Karvonen.jpg" width="auto" height="420px"rounded />
              <h5 className="green">GolfPro</h5>
              <h4>Teemu Karvonen</h4> 
              <MyModal name="Teemu Karvonen" />
            </Col>
          </Row>
          </div>
        </Container>
        
        
        <br /><br /><br /><br />
    
                    
        <section>

          <div>
            
          <div className="footer-image footer">
          <h1 className="footerText">Tiedustelut ja lisätiedot:<br />
          Tommi Linna<br />
          0400 917133
          </h1>

          </div>

          
          </div>
        </section>
        </div>
        <p>© Copyright, Linnareissut</p>
      </body>
    </div>
    </>
    )
}