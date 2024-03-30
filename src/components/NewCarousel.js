import React from 'react';
import { ReactDOM, Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


/* function getFiles(){
  console.log('**********************');
    const site = 'costaNavarino';
    const imageDirectory = path.join(process.cwd(), ('../public/images/').concat(site));
    console.log('imageDirectory: ', imageDirectory);
    const files = fs.readdirSync(imageDirectory);
    console.log('files: ', files);
    return files;
} */
const allImages = {
  costaNavarino: [
  "kuva1.jpg", "kuva2.jpg", "kuva3.jpg", "kuva4.jpg", 
  "kuva5.jpg", "kuva6.jpg", "kuva7.jpg", "kuva8.jpg", 
  "kuva9.jpg", "kuva10.jpg", "kuva11.jpg", "kuva12.jpg"
],
puertoBanus: [
  "kuva1.jpg", "kuva2.jpg", "kuva3.jpg", "kuva4.jpg", 
  "kuva5.jpg"
],
laGomera: [
  "kuva1.jpg", "kuva2.jpg", "kuva3.jpg", "kuva4.jpg", 
  "kuva5.jpg", "kuva6.jpg", "kuva7.jpg", "kuva8.jpg", 
  "kuva9.jpg", "kuva10.jpg", "kuva11.jpg", "kuva12.jpg",
  "kuva13.jpg", "kuva14.jpg"
]
}

function images(destination){
  console.log("destination: ", destination );
 
//  console.log('name: ', name);
//  const selectedDestinationImages = allImages;
//  console.log('selectedDestinationImges: ', selectedDestinationImages);

 return allImages[destination].map((picture) => {
  console.log('picture: ', picture);
  console.log("destination 37: ", destination);
  const source = ("/images/").concat(destination).concat("/").concat(picture);
  console.log('source: ', source);
  return (
    <div>
        
    <img 
      src={source}
      width="auto"
      height={500}
      alt={''}
      
      
    />
    </div>
 )
})
}
console.log('images: ', images('costaNavarino'));

function NewCarousel(props){ 
  console.log('destination 53: ', props.destination);
  
  return(
    <Carousel autoPlay interval="5000" axis="horizontal" transitionTime="5000" infiniteLoop showArrows={true} showThumbs={true}>
       {images(props.destination)} 
    </Carousel>

    ); 
};

export default NewCarousel;