import React from 'react';
import './about.css'
import { getPicture } from '../../service';
export function About() {
  
  const [img, setImage] = React.useState();
  React.useEffect(() => {
async function fetchImage() {
      try {
        const url = await getPicture();
        setImage(url); // Update the state with the URL from the backend
      } catch (err) {
        console.error("Frontend error:", err);
      }
    }

    fetchImage();
  }, []);
  return (
    <div>
     <main>
            <div className="center-img"> 
              <img src={img} width={250} alt="Random floral"/> 
            </div>
            <p className="box-text">
            The idea for Blossom Blueprint came from my sister in law who is a florist. She found herself wasting a lot of time organizing her floral recipes, searching wholesaler websites in order to find good prices, and trying to calculate order details. The purpose of this tool is to facilitate the organization of the design details for every florist. With this website, a florist will be able to plan out their designs, see prices, calculate client markups and save time during their design process.
            </p>
            
        </main>
    </div>
  );
}