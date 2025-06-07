'use client';
import { ContainerPage } from './styled';
import ProductFeatures from './components/animata/hero/product-features';
import MyHistory from './components/sections/MyHistory';
import Services from './components/sections/Services';
import UpButton from './components/UpButton';
import FAQ from './components/sections/FAQ';
import Footer from './components/sections/Footer';
import { MyNavBar } from './components/NavBar';
import Gallery from './components/Gallery';

export default function Home() {
  return (
    <>
      <ContainerPage className="bg-primaryColor-7">
        <MyNavBar />
        <ProductFeatures />
        <Services />
        <MyHistory />
        <FAQ />
        <Gallery />
        <Footer />
      </ContainerPage>
      <UpButton />
    </>
  );
}
