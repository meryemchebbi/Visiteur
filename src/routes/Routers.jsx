import Produits from '../pages/Produits/Produits'
import Home from '../pages/Home'
import Contact from '../pages/Contact/Contact'
import Projets from '../pages/Projets/Projets'
import Services from '../pages/Services/Services'
import DetailProjet1 from '../pages/DetailProjets/DetailProjet1'
import DetailProjet3 from '../pages/DetailProjets/DetailProjet3'
import DetailProjet4 from '../pages/DetailProjets/DetailProjet4'
import DetailProjet5 from '../pages/DetailProjets/DetailProjet5'
import DetailProjet6 from '../pages/DetailProjets/DetailProjet6'
import DtailProjet2 from '../pages/DetailProjets/DtailProjet2'




import {Routes , Route} from 'react-router-dom'

const Routers = () => {
  return <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/produits" element={<Produits/>} />
    <Route path="/projets" element={<Projets/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/dp1" element={<DetailProjet1/>} />
    <Route path="/dp2" element={<DtailProjet2/>} />
    <Route path="/dp3" element={<DetailProjet3/>} />
    <Route path="/dp4" element={<DetailProjet4/>} />
    <Route path="/dp5" element={<DetailProjet5/>} />
    <Route path="/dp6" element={<DetailProjet6/>} />
  </Routes>
}

export default Routers;
