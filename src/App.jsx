import { useRef } from 'react';
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
  let myHeadline = useRef();
  let myImg = useRef();
  let firstName, lastName = useRef();
  let myCss = useRef();
  const change = () => {
      myHeadline.current.innerText = "Hello useRef";
  }
  const changeImg = () => {
    myImg.current.src = "https://placehold.co/600x400/orange/white";
    myImg.current.setAttribute('height', '200px');
     myImg.current.setAttribute('width','300px')

  }
  const firstLastName = () => {
    let fName = firstName.value;
    let lName = lastName.value;
    alert(fName + " " + lName);
  }
  const cssChange = () => {
    myCss.current.classList.remove('text-success');
    myCss.current.classList.add('text-danger');

  }

  let APIData = useRef(null);
  let myTag = useRef();
  const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/products/1');
    APIData.current = await response.json();
  }
  const showData = () => {
    myTag.current.innerText = JSON.stringify(APIData.current);
  }
  return (
    <div>
      <Hero item={ItemObj} btn={BtnClick} />
      <div>
        <h1 ref={myHeadline}></h1>
        <img ref={ myImg} src="https://placehold.co/600x400" alt="" />
        <button onClick={change}>Ref Click</button>
          <button onClick={changeImg}>Ref Click image</button>

      </div>
      <div>
        <input ref={(a) => firstName=a} type="text" placeholder='First NAme' name="" id="" />
                <input ref={(b)=> lastName=b} type="text" placeholder='Last NAme' name="" id="" />
<button onClick={firstLastName}>flname Click</button>
      </div>
      <h1 ref={myCss} className='text-success'>My name is Rashed
      </h1>
      <button onClick={cssChange}>change css</button>
      <div>
        <p ref={myTag}></p>
        <button onClick={fetchData}>call api</button>
        <button onClick={showData}>Show data</button>
      </div>
    </div>
  );
};

export default App;