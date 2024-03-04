import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/header/Header';
import Routers from '../routes/Routers';

const Layout = () => {
  return (
    <>
    <Header/>
    
      <div>
    <main>
        <Routers/>
    </main>
   
    
      <Footer/>
      </div>
      
    </>
  )
}

export default Layout
