
import './index.css';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import Main from './Components/Main';

function App() {
  return (
    
    <div className="w-screen bg-gray-300 font-nunito">
      <Header/>
       <Main/>
      <Footer/>
    </div>
    
  );
}

export default App;
