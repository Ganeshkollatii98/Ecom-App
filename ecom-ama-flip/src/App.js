
import './index.css';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import Main from './Components/Main';

function App() {
  return (
    
    <div className="h-screen bg-red-200 font-nunito">
      <Header/>
       <Main/>
      <Footer/>
    </div>
    
  );
}

export default App;
