import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{background: "#141414"}}>
      <Menu />
      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo} // esta linha poe o video em destaque
        url={dadosIniciais.categorias[0].videos[0].url} //esta linha poe a tambmail do video na banner do site
        videoDescription={'Oque é Front-end?'}
      />
      <Carousel 
        ignoreFristVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel 
        ignoreFristVideo
        category={dadosIniciais.categorias[1]}
      />
      <Carousel 
        ignoreFristVideo
        category={dadosIniciais.categorias[2]}
      />
      <Carousel 
        ignoreFristVideo
        category={dadosIniciais.categorias[3]}
      />
      <Carousel 
        ignoreFristVideo
        category={dadosIniciais.categorias[4]}
      />
      <Carousel 
        ignoreFristVideo
        category={dadosIniciais.categorias[5]}
      />
      <Footer />
    </div>
  );
}

export default Home;
