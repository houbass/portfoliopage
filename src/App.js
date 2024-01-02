import { useEffect, useLayoutEffect, useRef, useState } from 'react';

//CSS
import './App.css';

//COMPONENTS
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import MySkills from './components/MySkills';
import MyProjects from './components/MyProjects';
import ComercialProjects from './components/ComercialProjects';
import Footer from './components/Footer';

//PICTURES
import foto from "./pic/foto.webp";
import lofichordPic from "./pic/lofichord.webp";
import gravityPic from "./pic/gravity.webp";
import mindfuckPic from "./pic/mindfuck.webp";
import miningPic from "./pic/mining.webp";
import spacePic from "./pic/space.webp";
import gittextdPic from "./pic/gittext.png";
import gitPic from "./pic/git.webp";


export default function App() {

  //refs
  const introduction = useRef();
  const skills = useRef();
  const projects = useRef();
  const comercial = useRef();
  const contact = useRef();
  
  //TOPIC OPACITY (when img loaded)
  const [mainOpacity, setMainOpacity] = useState(0);
  const [mainOpacity2, setMainOpacity2] = useState(0);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  //IMAGES
  const imageUrls = [foto, lofichordPic, gravityPic, mindfuckPic, miningPic, spacePic, gittextdPic, gitPic];

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

      const timeout = setTimeout(() => {

        setMainOpacity2(1);
      }, 3500)

      return () => {
        clearInterval(timeout);
      }
    }
  }, [allImagesLoaded])


  return (
    <div  className="App" >
      <Navbar 
      introduction={introduction}
      skills={skills} 
      projects={projects} 
      comercial={comercial} 
      contact={contact}
      />
      <Introduction 
      introduction={introduction}
      foto={foto} 
      mainOpacity={mainOpacity}
      />

      <MySkills 
      skills={skills}
      mainOpacity={mainOpacity2}
      />

      <MyProjects 
      projects={projects}
      lofichordPic={lofichordPic} 
      mindfuckPic={mindfuckPic} 
      gravityPic={gravityPic} 
      miningPic={miningPic} 
      spacePic={spacePic}
      gittextdPic={gittextdPic} 
      gitPic={gitPic} 
      mainOpacity={mainOpacity2}
      />

      <ComercialProjects 
      comercial={comercial}
      lofichordPic={lofichordPic} 
      gittextdPic={gittextdPic} 
      gitPic={gitPic}
      mainOpacity={mainOpacity2}
      />

      <Footer 
      contact={contact}
      mainOpacity={mainOpacity2}
      />
    </div>
  );
}
