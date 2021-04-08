import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { CarouselMain } from "./component/carousel/CarouselMain"
import { Header } from "./component/header/Header";
import { Main1 } from "./component/main1/Main1";
import { Main2 } from "./component/main2/Main2";
import { Main3 } from "./component/main3/Main3";

import logo from './image/logo01.png'


function App() {
  return (
     <>
    <Header/>
   
    <Main2/>

    <Main3/>

    <CarouselMain/>
    </>
  );
}

export default App;



