import Atf from './Atf';
import ListServices from './ListServices';
import Partners from './Partners';
import Services from './Services';
import Story from './Story';
import TechStack from './TechStack';
import Works from './Works';
import Awards from './Awards';
import Affilliations from './Affilliations';
import Create from './Create';

function Home() {
  return (
    <>
      <Atf/>
      <Services/>
      <ListServices/>
      <Works/>
      <TechStack/>
      <Story/>
      <Partners/>
      <Awards/>
      <Affilliations/>
      <Create/>
    </>
  );
}

export default Home;
