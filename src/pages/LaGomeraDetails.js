import React from 'react' 
import '../App.css';
import NewCarousel from '../components/NewCarousel';
import Logo from '../components/Logo';
import { Row, Col }  
    from 'react-bootstrap';
import SocialMedia from '../components/SocialMedia';
//import "react-responsive-carousel/lib/styles/carousel.min.css";

const CostaNavarinoDetails = () => (
    
   <div> 
        <div class="image-panel-container">
            <div>
            <SocialMedia />
            <Logo />
            <img 
            src="./images/laGomera/kuva12.jpg" 
            height={400}
            width='100%'
            alt={""}
            />
            
            </div>
            <div class="panel bg-primary text-white headingPanel">
                Gomera<br />
                30.12.2024.-12.1.2025
            </div>
        </div>
    
        <section>
        <Row>
        <Col xs={12} sm={12} md={12} lg={4} >    
        </Col>
      <Col xs={12} sm={12} md={12} lg={8} >
      
        <div class="column left background-color:#aaa">
        </div>
        <div class ="column right">
        <h2 className="headingMatka">Tommi Linnan peli- ja opetusmatka<br />
            Gomera, Kanarian saaret</h2>
            

            <h2 className="headingMatka">Ilmoittaudu matkalle:</h2>
            <p className="matkaTeksti">Tommi Linna<br />
            tommi.linna@golf.fi<br />
            0400 917 133</p> 


        </div>
        </Col>
        </Row>
        <div className="carouselBg">
        <Row>
            <Col xs={12} sm={12} md={12} lg={3}></Col>
            <Col xs={12} sm={12} md={12} lg={6}>
            <NewCarousel destination='laGomera' />
            </Col>
        </Row>
        </div>
        </section>
        </div>
        
    );
  
  export default CostaNavarinoDetails;
