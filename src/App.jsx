import Hero from './component/Hero';

const App = () => {

  const ItemObj = {
    name:'Rashed',
    phone:'01827801715',
    city:'CoxsBazar'  
  }
  const BtnClick = () => {
    alert('Pass function with funtion');
  }

  return (
    <div>
      <Hero item={ItemObj} btn={BtnClick} />
    </div>
  );
};

export default App;