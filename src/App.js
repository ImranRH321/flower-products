import logo from './logo.svg';
import './App.css';
import Header from './componet/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './componet/Home/Home';
import Flowers from './componet/flowers/Flowers';
import PageNotFoutn from './componet/PageNotFount/PageNotFoutn';
import About from './componet/About/About';
import Services from './componet/Services/Services';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home/>}>Home</Route>
      <Route path='/home' element={<Home/>}>Home</Route>
       <Route path='/flowers' element={<Flowers/>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/services' element={<Services/>}></Route>
       <Route path='*' element={<PageNotFoutn/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
