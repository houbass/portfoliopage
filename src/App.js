import { useEffect, useLayoutEffect, useState } from 'react';

//CSS
import './App.css';

//COMPONENTS
import Introduction from './components/Introduction';
import MySkills from './components/MySkills';
import MyProjects from './components/MyProjects';
import ComercialProjects from './components/ComercialProjects';
import Footer from './components/Footer';

//PICTURES
import foto from "./pic/foto.jpg";
import lofichordPic from "./pic/lofichord.png";
import gravityPic from "./pic/gravity.png";
import gittextdPic from "./pic/gittext.png";
import gitPic from "./pic/git.png";


export default function App() {
  
  //TOPIC OPACITY (when img loaded)
  const [mainOpacity, setMainOpacity] = useState(0);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  //IMAGES
  const imageUrls = [foto, lofichordPic, gravityPic, gittextdPic, gitPic];

  //WAIT TO LOAD ALL IMAGES
  useEffect(() => {
    const loadImage = (url) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });

    const loadAllImages = async () => {
      try {
        const imagePromises = imageUrls.map(loadImage);
        await Promise.all(imagePromises);
        setAllImagesLoaded(true);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    loadAllImages();
  }, []);

  //CHECK IF ALL IMAGES ARE LOADED
  useEffect(() => {
    if(allImagesLoaded === true){
      setMainOpacity(1);
      console.log("ALL IMAGES LOADED")
    }
  }, [allImagesLoaded])


  return (
    <div  className="App" >
      <Introduction foto={foto} mainOpacity={mainOpacity}/>

      <MySkills 
      mainOpacity={mainOpacity}
      />

      <MyProjects 
      lofichordPic={lofichordPic} 
      gravityPic={gravityPic} 
      gittextdPic={gittextdPic} 
      gitPic={gitPic} 
      mainOpacity={mainOpacity}
      />

      <ComercialProjects 
      lofichordPic={lofichordPic} 
      gittextdPic={gittextdPic} 
      gitPic={gitPic}
      mainOpacity={mainOpacity}
      />
      <Footer mainOpacity={mainOpacity}/>
    </div>
  );
}
