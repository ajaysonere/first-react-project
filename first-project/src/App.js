import {  BrowserRouter , Routes , Route } from 'react-router-dom'
import { Header } from './components/Header';
import './styles/App.scss';
import './styles/home.scss';
import './styles/Header.scss';
import './styles/footer.scss';
import "./styles/contect.scss";
import "./styles/mediaquery.scss";

import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { Contect } from './components/Contect';
import { Services } from './components/Services';


function App() {
  return (
     <BrowserRouter>
       <Header> </Header>
       <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/contect' element = {<Contect />}></Route>
         <Route path='/services' element = {<Services />}></Route>
       </Routes>
       <Footer > </Footer>
     </BrowserRouter>
  );
}

export default App;
