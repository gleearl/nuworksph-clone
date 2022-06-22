import Header from './components/Header';
import './scss/main.scss';
import "../node_modules/slick-carousel/slick/slick.css"
import "../node_modules/slick-carousel/slick/slick-theme.css"
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import TermsAndConditions from './components/TermsAndConditions'
import PrivacyPolicy from './components/PrivacyPolicy'
import WorkItem from './components/WorkItem';
import Connect from './components/Connect';

function App() {
  return (
    <BrowserRouter>
      <div className="app h-100">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:id' element={<WorkItem/>}/>
          <Route path='terms-and-conditions' element={<TermsAndConditions/>}/>
          <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
          <Route path='lets-connect' element={<Connect/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
