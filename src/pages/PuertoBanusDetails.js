import React from 'react';
import '../App.css';
//import NewCarousel from '../components/NewCarousel';
import Logo from '../components/Logo';
import { Row, Col }  
    from 'react-bootstrap';
//import SocialMedia from '../components/SocialMedia';

const BuertoBanusDetails = () => (
    
   <div> 
        <div class="image-panel-container">
            <div>
            {/* <SocialMedia /> */}
            <Logo />
            <img 
            src="./images/puertoBanus/kuva6.jpg" 
            height={800}
            width='100%'
            alt={""}
            />
            
            </div>
            <div class="panel bg-primary text-white headingPanel">
                Marbella<br />
                27.10.-3.11.2024
            </div>
        </div>
    
        <section>
        <Row>
        <Col xs={12} sm={12} md={12} lg={3} >    
        </Col>
      <Col xs={12} sm={12} md={12} lg={9} >
      
      
        <div class="column left background-color:#aaa">
        </div>
        <div class ="column right">
        <h2 className="headingMatka">Pro Tommi Linnan matkassa Marbellaan<br />
            Puerto Banus, Marbella, Costa del Sol</h2>
           
            <p className="matkaTeksti">
                Matka suuntautuu Espanjan lämpöön ja kohteena Marbella Costa del Solilla. 
                Aivan merenrannan tuntumassa sijaitseva Sol Marbella Estepona Atalaya Park 
                on täysin uusittu viihtyisä hotelli, josta on vain viiden minuutin kuljetus 
                Atalaya Golfiin.
            </p>
            <p className="matkaTeksti">
            Moderneissa huoneissa on vaalea sisustus ja selkeällä säällä hotellilta voi 
            nähdä Gibraltarille ja jopa Afrikan mantereelle. Ravintoloita on kaksi: 
            Buffet-ravintola ja Italialainen ala carte -ravintola. Lisäksi löytyy kauppoja 
            ja kampaamo.
            </p>
            <p className="matkaTeksti">
            Aula- ja Jazz-baarit livemusiikilla höystettynä luovat iltoihin tunnelmaa.
            </p>
            <p className="matkaTeksti">
            Kohteessa Atalaya Golfissa on kaksi kenttää (New ja Old).
            </p>
            <p className="matkaTeksti">
            Old Course (par 72, 6146m) on Championship tason kenttä, josta löytyy leveähköt 
            väylät ja korotetut griinit. Kentältä on upea näkymä La Concha vuorelle ja 
            tasaisena kenttänä se on helposti käveltävissä.
            </p>
            <p className="matkaTeksti">
            New Course (par 71, 5142m) on lyhempi, mutta saa aikaan tutun golftunteen kumpuilevine 
            väylineen. Luvassa on siis korkeuseroja ja komeita maisemia merelle!
            </p>

    
            <h2 className="headingMatka">Hinta: 2hh 1880 €/hlö Helsingistä</h2>
            <h2 className="headingMatka">Hintaan sisältyy:</h2>
            <li class="matkaTeksti">7 yötä puolihoidolla (ei sis. juomia) 2hh Double Standard huoneessa 
            Sol Marbella Estepona Atalaya Park 4*</li>
            <li class="matkaTeksti">5 greenfeetä 18r Atalaya Golf & Country Club:
                3 x New kenttä sis, jaettu golfauto
                2 x Old kenttä</li>
            <li class="matkaTeksti">2pv – 2 tuntia/h6v rajoittamattomat rangepallot sis. Trackman ja harjoitusalueet</li>
            <li class="matkaTeksti">Lento- ja golfkenttäkuljetukset kohteessa</li>
            <li class="matkaTeksti">Finnairin reittilennot sis. 23kg matkalaukku sekä 8kg käsimatkatavara Helsingistä
            </li>
            <li class="matkaTeksti">PGA pro Tommi Linna matkanjohtaja ja pelipäivinä opetustuokiot</li>
            
            <h2 className="headingMatka">Lisämaksusta:</h2>
            <li class="matkaTeksti">Liittymälennot Oulusta: +170€/hlö</li>
            <li class="matkaTeksti">Huone yhdelle: +289€/7vrk/hlö</li>
            <li class="matkaTeksti">Merinäköala huoneessa: +131€/7vrk/huone</li>
            <li class="matkaTeksti">Golfbägi lennolle: noin. +58€/kpl/meno-paluu</li>
            <li class="matkaTeksti">1 greenfee 18r El Paraiso Golf: +102€/hlö</li>

            <h2 className="headingMatka">Lennot: </h2> 
            <Row>
            <Col xs={12} sm={12} md={12} lg={6} >
            <p className="matkaTeksti">MENO / Su 27.10.2024</p>

            <li class="matkaTeksti">OUL – HEL: 17:35 – 18:35</li>
            <li class="matkaTeksti">HEL - AGP: 19:45 - 23:35</li>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} >
            <p className="matkaTeksti">PALUU - Su 3.11.2024</p>
            <li class="matkaTeksti">AGP - HEL: 11:05 - 16:45</li>
            <li class="matkaTeksti">HEL - OUL: 20:35 - 21:40</li>
            </Col>
            
            </Row>

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
            {/* <NewCarousel destination='puertoBanus' /> */}
            </Col>
        </Row>
        </div>
        </section>
        </div>
        
    );
  
  export default BuertoBanusDetails;
