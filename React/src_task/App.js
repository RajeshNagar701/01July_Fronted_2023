import React_Bootstrap from "./Bootstrap/React_Bootstrap";
import Simple_bootstrap from "./Bootstrap/Simple_bootstrap";
import Class_component from "./Component/Class_component";
import Fun_component from "./Component/Func_component";
import Css from "./Css/Css";
import Jsx_component from "./JSX/Jsx_component";
import About from "./Layout/Pages/About";
import Contact from "./Layout/Pages/Contact";
import Home from "./Layout/Pages/Home";
import Class_Life from "./Lifecycle/Class/Class_Life";
import Func_life from "./Lifecycle/Function/Func_life";
import Mui_component from "./MUI/Mui_component";
import Module_css from "./Module_css/Module_css";
import Func_props from "./Props/Func_props";
import Main_props from "./Props/Main_props";
import Main_app from "./Props_Drilling/Main_app";
import App_main from "./Routing/App_main";
import Sass_css from "./Sass/Sass_css";
import Styled_component from "./Styled_component/Styled_component";
import Class_state from "./states/Class/Class_state";
import Func_state from "./states/Function/Func_state";
import UseContext_app from "./useContext/UseContext_app";
import Useref from "./useRef/Useref";

function App() {
  return (
    <div>
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
      //<Styled_component/>
    

      //states
      //<Func_state/>
      //<Class_state/>
    
      //Routing
      //<App_main/>
    
      // lifecycle
      //<Class_Life/>
      //<Func_life/>

      //<Useref/>

      // props drilling / useContext/createContext 
      //<Main_app/>
      <UseContext_app/>
    }
    </div>
  );
}

export default App;
