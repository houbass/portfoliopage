import { useEffect, useLayoutEffect, useRef, useState } from 'react';

//CSS
import './App.css';

//COMPONENTS
import Introduction from './components/Introduction';
import MySkills from './components/MySkills';
import MyProjects from './components/MyProjects';
import Contact from './components/Contact';

//PICTURES
import foto from "./pic/foto.webp";
import lofichordPic from "./pic/lofichord.webp";
import gravityPic from "./pic/gravity.webp";
import mindfuckPic from "./pic/mindfuck.webp";
import miningPic from "./pic/mining.webp";
import spacePic from "./pic/space.webp";
import sofaPic from "./pic/sofalofi.webp";
import servicePic from "./pic/autoservis.webp";

export default function App() {
  //refs
  const introduction = useRef();
  const skills = useRef();
  const projects = useRef();
  const contact = useRef();
  
  //TOPIC OPACITY (when img loaded)
  const [mainOpacity, setMainOpacity] = useState(0);
  const [mainOpacity2, setMainOpacity2] = useState(0);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  //IMAGES
  //const imageUrls = [foto, lofichordPic, gravityPic, mindfuckPic, miningPic, spacePic, sofaPic, servicePic, bncPic, gittextdPic, gitPic];
  const imageUrls = [foto];

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
    // eslint-disable-next-line
  }, []);

  //CHECK IF ALL IMAGES ARE LOADED
  useEffect(() => {
    if(allImagesLoaded === true){
      setMainOpacity(1);
      setMainOpacity2(1);
    }
    // eslint-disable-next-line
  }, [allImagesLoaded]);


  useLayoutEffect(() => {
    introduction.current.scrollIntoView();
    // eslint-disable-next-line
  }, [])


  return (
    <div  className="App" >

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
      sofaPic={sofaPic} 
      servicePic={servicePic} 
      mainOpacity={mainOpacity2}
      />

      <Contact 
      sofaPic={sofaPic} 
      contact={contact}
      mainOpacity={mainOpacity2} 
      />
    </div>
  );
}
