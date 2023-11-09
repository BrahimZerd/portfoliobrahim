import { useEffect } from "react";
import { useState } from "react";


// Header


import { Header } from "../components/header";

//Presentation with picture bloc + bouton to mail
import { PresentationPicture } from "../components/presentationGroup";

// Bloc about me
import { About } from "../components/aboutme";

//Bloc Skills to show up + img
import { Skills } from "../components/skills";
//Library & frameworks bloc
import { Library } from "../components/Library&Frameworks";

//My Workflow element
import { Workflow } from "../components/workflow";

//Project element
import { Projects } from "../components/Projects";

//Footer element
import { Footer } from '../components/footer';

import showElements from "../features/scrollEffect";
function App() {

  const [french, setFrench] = useState(false);


useEffect(() => {
  showElements();

})

const setLangue = () => {

  setFrench(true)
}

const unsetLangue = () => {
  setFrench(false)
}

  return (
  <>
  
    <Header 
    setLanguage={setFrench}
    language={french}
    toggle={setLangue}
    notToggling={unsetLangue}
    />
    <PresentationPicture
    isFrench={french}
    />
    <About 
    isFrench={french}
    />
    <Skills
    isFrench={french}
    />
    <Library 
    isFrench={french}
    />
    <Workflow
    isFrench={french}
    />
    <Projects 
    isFrench={french}
    />
    <Footer
    isFrench={french}
    />
     
   
  </>
  );
}

export default App;
