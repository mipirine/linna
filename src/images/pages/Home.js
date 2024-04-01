import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import '../App-css-reset.css';
import '../App.css';
import Logo from '../components/Logo';
import SocialMedia from '../components/SocialMedia';
import MyModal from '../components/MyModal';

export const Home = () => {            
    const navigate =useNavigate();
    return (
        <>
        <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <head>
        
        <div>
{/*         <SocialMedia />
        <Logo />   
          
            <h1 style={{fontSize: '7vw'}}>Golfmatkat<br />
            hyvässä seurassa</h1>
            
            <h4 style={{fontSize: '3vw'}}>Koe upeat golfkohteet ympäri maailman!</h4>
            <a href="#matkat" smooth={true} duration={500}>
              <Button variant="light">TUTUSTU MATKOIHIN</Button>
            </a> 
            */}   
        </div>
        
        </head>
        <body>
            <div class="frontPage-div">Tähän jotain uutta tekstiä</div>
      <div>
        <div id="matkat" className="matkat main" >
     
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
        <h2 className="h2" style={{fontSize: '50px', fontWeight: 'bold'}}>
            Linnareissuilla opetuksesta<br />
            vastaavat aina ammattilaiset: 
            </h2>
          <Row>
            <Col xs={12} sm={12} md={12} lg={4} >
              <Image src="./images/GolfPro-Tommi-Linna.jpg" width="auto" height="480px" rounded style={{marginBottom: '20px'}}/>
              <h3 className="green" style={{fontWeight: 'bold'}}>GolfPro</h3>
              <h2 style={{fontWeight: 'bold', marginBottom: '20px'}}>Tommi Linna</h2>
              <MyModal name="Tommi Linna" />
              
            </Col>
            <Col xs={12} sm={12} md={12} lg={4} >
              <Image src="./images/GolfPro-Linda-Osala.jpg" width="auto" height="480px" rounded style={{marginBottom: '20px'}} />
              <h3 className="green" style={{fontWeight: 'bold'}}>GolfPro</h3>
              <h2 style={{fontWeight: 'bold', marginBottom: '20px'}}>Linda Osala</h2> 
              <MyModal name="Linda Osala" />
            
            </Col>
            <Col xs={12} sm={12} md={12} lg={4} >
              <Image src="./images/GolfPro-Teemu-Karvonen.jpg" width="auto" height="480px"rounded style={{marginBottom: '20px'}} />
              <h3 className="green">GolfPro</h3>
              <h2 style={{fontWeight: 'bold', marginBottom: '20px'}}>Teemu Karvonen</h2> 
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