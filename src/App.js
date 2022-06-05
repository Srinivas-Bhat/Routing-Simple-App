
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import {Routes, Route} from "react-router-dom"
import Details from './components/Details';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        {/* <Route path='/details' element={<Details/>}/> */}
        <Route path='/products/:id' element={<Details/>}/>
        <Route path='/error' element={<Error/>}/>
      </Routes> 
    </div>
  );
}

export default App;
