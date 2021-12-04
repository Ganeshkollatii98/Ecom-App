
import './index.css';
import {Route,BrowserRouter,Routes} from "react-router-dom";
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import Main from './Components/Main';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="w-screen bg-gray-300 font-nunito">
      <Header/>
     
        <Routes>
        <Route path="/product/:id" element={<ProductScreen/>}></Route>
        <Route path="/" element={<HomeScreen/>} exact></Route>
        </Routes>
   
      <Footer/>
     
    </div>
    </BrowserRouter>
    
  );
}

export default App;
