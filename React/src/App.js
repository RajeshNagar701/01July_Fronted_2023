import React_Bootstrap from "./Bootstrap/React_Bootstrap";
import Simple_bootstrap from "./Bootstrap/Simple_bootstrap";
import Class_component from "./Component/Class_component";
import Fun_component from "./Component/Func_component";
import Css from "./Css/Css";
import Jsx_component from "./JSX/Jsx_component";
import About from "./Layout/Pages/About";
import Contact from "./Layout/Pages/Contact";
import Home from "./Layout/Pages/Home";
import Mui_component from "./MUI/Mui_component";
import Module_css from "./Module_css/Module_css";
import Func_props from "./Props/Func_props";
import Main_props from "./Props/Main_props";
import Sass_css from "./Sass/Sass_css";
import Styled_component from "./Styled_component/Styled_component";

function App() {
  return (
    <div className="container mt-5">

     {
      // component
      //<Fun_component/>
      //<Class_component/>
    

      // jsx
      //<Jsx_component/>


      //layout
      //<Home/>
      //<About/>
      //<Contact/>

      //props
      //<Main_props/>

      //css  & module css & sass css
      //<Css/>
      //<Module_css/>
      //<Sass_css/>

      // bootsrap / react-bootstrap 
      //<Simple_bootstrap/>
      //<React_Bootstrap/>
    
      //mui / styled component
      //<Mui_component/>
      <Styled_component/>
    }
      

    </div>
  );
}

export default App;
