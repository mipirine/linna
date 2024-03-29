import React from 'react'
import Head from 'react'; 
import '../App.css';
//import NewCarousel from '../components/NewCarousel';
import Logo from '../components/Logo';
import { Container, Row, Col, ResponsiveEmbed }  
    from 'react-bootstrap';
//import SocialMedia from '../components/SocialMedia';

const CostaNavarinoDetails = () => (
    
   <div> 
        <div class="image-panel-container">
            
            <div>
                {/* <SocialMedia /> */}
            <Logo />
            
            <img 
            src="./images/costaNavarino/kuva1.jpg" 
            height={400}
            width={'100%'}
            alt={""}
            />
            
            </div>
            <div class="panel bg-primary text-white headingPanel">
                Costa Navarino<br />
                7.-14.4.2024
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
            Costa Navarino, Kreikka</h2>
            <p className="matkaTeksti">
            Tervetuloa pro Tommi Linnan mukaan laadukkaalle peli- ja opetusmatkalle Euroopan
            ykköskohteeseen Costa Navarinoon.
            </p>
            <p className="matkaTeksti">
                Tommi on toiminut vuodesta 1995 lähtien opetus- ja valmennustehtävissä ja vetänyt
                kymmenittäin golfmatkoja maailmalle. Tällä hetkellä Tommi valmentaa ja opettaa pelaajia
                ammattilaisista vasta-alkajiin.
            </p>
           <p className="matkaTeksti">
                Hotelli ja neljä täysimittaista golfkenttää sekä ravintolapalvelut ovat ensiluokkaista
                tasoa kun taas ympäristö on konstailematon ja rakennukset sulautettu luontoon niin, että joka 
                puolella on vehreää nurmea, oliivipuita, vuoria tai upeat näkymät merelle.
            </p>
           <p className="matkaTeksti">
            Costa Navarinon neljä golfkenttää ovat tunnettujen golfkenttäsuunnittelijoiden Bernhard 
            Langer, Robert Trent Jones Jr. ja José María Olazábal käsialaa. 
            </p>
           <p className="matkaTeksti">
                Kentiltä on vaikea poimia signature väyliä, niin huikeita näkymiä ja pelihaasteita
                tarjoavat jokainen. Päällimmäisenä viikosta mieleen jää upea kokonaisuus ja kaipuu
                päästä takaisin tähän kohteeseen.
            </p>
    
            <h2 className="headingMatka">Hinta 2595 €</h2>
            <h2 className="headingMatka">Hintaan sisältyy:</h2>
            <li class="matkaTeksti">Lennot Helsinki-Kalamata-Helsinki</li>
            <li class="matkaTeksti">Lentokenttä- ja golfkuljetukset</li>
            <li class="matkaTeksti">7 yötä jaetussa kahden hengen Deluxe Garden View huoneessa</li>
            <li class="matkaTeksti">Aamiaiset ja 3 illallista (eri ravintoloita)</li>
            <li class="matkaTeksti">5 green feetä (Dunes, Bay, Hills, Olympic)</li>
            <li class="matkaTeksti">Jaettu golfauto kaikille kierroksillen</li>
            <li class="matkaTeksti">TaylorMade vuokramailat (saatavuuden mukaan, vaatii ennakkovarauksen)</li>
            <li class="matkaTeksti">Tommin opetushetket (1h) ennen kierrosta  + peliopetusta lisäksi kentällä</li>

            <h2 className="headingMatka">Lisämaksusta:</h2>
            <li class="matkaTeksti">Yhden hengen huone: 550 €</li>
            <li class="matkaTeksti">Superior/Infinity huone 220 €</li>
            <li class="matkaTeksti">Golfbägin kuljetus lennolla 90 €</li>
            <li class="matkaTeksti">Golfbägivakuutus: 18 €</li>
            <h2 className="headingMatka">Lisätietoja: </h2> 
            <a class="App-link h6" href="https://golfplaisir.fi/tommi-linna-costa-navarino/">https://golfplaisir.fi/tommi-linna-costa-navarino/</a>

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
            {/* <NewCarousel destination='costaNavarino' /> */}
            </Col>
        </Row>
        </div>
        </section>
        </div>
        
    );
  
  export default CostaNavarinoDetails;
