import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Movies from './Components/Movies';
import Movieview from './Components/Movieview';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
       <Route path='/' element={<Movies/>}></Route>
       <Route path='/view-movie/:id' element={<Movieview></Movieview>}></Route>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
