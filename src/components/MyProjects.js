// pictures
import { useState } from "react";

// material ui
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';

//pictures
import gitPic from "../pic/git.svg";
import gittextdPic from "../pic/gittext.svg";

import takecarsPic from "../pic/takecars.webp";
import letitrollPic from "../pic/letitroll.webp";
import ritaPic from "../pic/rita.webp";
import grooovePic from "../pic/grooove.webp";
import kafeavubecPic from "../pic/kafeavubec.webp";
import top10dnbPic from "../pic/top10dnb.webp";

// components
import MyProjectsDetails from "./MyProjectsDetails";
import ProjectCard from "./ProjctCard";

export default function MyProjects({projects, lofichordPic, gravityPic, mindfuckPic, miningPic, spacePic, sofaPic, servicePic, mainOpacity }) {

    // IMPORTING MY PROJECTS DETAILS
    const {myProjects} = MyProjectsDetails(lofichordPic, gravityPic, mindfuckPic, miningPic, spacePic, sofaPic, servicePic, takecarsPic, letitrollPic, ritaPic, grooovePic, kafeavubecPic, top10dnbPic)

    // STATES FOR FILTERING
    const [framework, setFramework] = useState("All");
    const [language, setLanguage] = useState("All");

    // STATES FOR SHOWMORE BTN
    const [showMore, setShowMore] = useState({
        text: "Show More",
        elements: 2,
        state: false
    });


    // FILTERING BY FRAMEWORKS
    const filteredByFramework = myProjects.filter((e, i) => {

        if(framework === "All") {
            return e
        } else{
            const stackCheck = e.techStack.map((stack) => stack.name).includes(framework)
    
            return stackCheck === true
        }
    })


    // FILTERING BY LANGUAGE
    const filteredByLanguage = filteredByFramework.filter((e, i) => {
        if(language === "All") {
            return e
        } else{
            const languageCheck = e.techStack.map((stack) => stack.name).includes(language)

            return languageCheck === true
        }
    })


    // SHOW MORE
    const filteredProjects = filteredByLanguage.filter((e, i) => i <= showMore.elements )
    
    function showMoreFun() {
        if(showMore.state === false) {
            setShowMore({
                text: "Show Less",
                elements: myProjects.length,
                state: true
            });
        } else{
            setShowMore({
                text: "Show More",
                elements: 2,
                state: false
            });

            projects.current.scrollIntoView(
                {
                    behavior: 'smooth',
                    block: "center",
                    inline: "nearest"
                }
            );
        }
    };

    return(
        <div 
        ref={projects}
        className="container color2"
        >
            <section className="container1" 
            style={{
                opacity: mainOpacity, 
                transition: "1.5s",
                }}>
                <div className="col col-1-2"                     >
                    
                    <div 
                    className="pointer fit"
                    onClick={() => {
                        projects.current.scrollIntoView();
                    }}>
                        <h1 className="title mb1">My Projects</h1>   
                    </div>                 

                    <div className="filter-box mb1">
                        <FormControl className="custom-form-control" sx={{ width: 150 }}>
                            <InputLabel id="demo-simple-select-label">Framework</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={framework}
                            label="Framework"
                            onChange={(e) => {setFramework(e.target.value)}} 
                            MenuProps={{
                                PaperProps: {
                                  className: 'custom-menu-paper', // Apply custom class to the menu paper
                                }
                            }}
                            >
                                <MenuItem className="MenuItem" value={"All"}>All</MenuItem>
                                <MenuItem value={"React"}>React</MenuItem>
                                <MenuItem value={"Next.js"}>Next.js</MenuItem>
                                <MenuItem value={"WordPress"}>WordPress</MenuItem>
                                <MenuItem value={"Easol"}>Easol</MenuItem>
                                <MenuItem value={"Shoptet"}>Shoptet</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl className="custom-form-control" sx={{ width: 150 }}>
                            <InputLabel id="demo-simple-select-label">Language</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={language}
                            label="Language"
                            onChange={(e) => {setLanguage(e.target.value)}} 
                            >
                                <MenuItem value={"All"}>All</MenuItem>
                                <MenuItem value={"JavaScript"}>Javascript</MenuItem>
                                <MenuItem value={"PHP"}>PHP</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    
                    {filteredProjects.map((item, index) => {
                        let thisVisibility = "visible";
                        if(item.git === null){
                            thisVisibility = "hidden";
                        }

                        return(
                            <div 
                            key={index}
                            className="projectCard animePad" 
                            >
                                <ProjectCard 
                                item={item} 
                                index={index} 
                                thisVisibility={thisVisibility} 
                                gitPic={gitPic}
                                gittextdPic={gittextdPic}
                                />
                            </div>
                        )
                    })}
                </div>
            </section> 


            {filteredByLanguage.length > 3
            ? <button 
            onClick={showMoreFun} 
            className="button2"
            >{showMore.text}</button>

            : null
            }

        </div>
    )
}
