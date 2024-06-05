import Card from "./components/cards/Card"
import Skeleton from "./components/cards/Skeleton";
import { useEffect, useState } from "react";
import image1 from './assets/image/sample_02.jpg';
import image2 from './assets/image/sample_03.jpg';
import image3 from './assets/image/sample_04.jpg';
import image4 from './assets/image/sample_05.jpg';

const data = [
  {
    "title": "JJKS1",
    "img": image1,
    "motto": "wake up"
  },
  {
    "title": "JJKS2",
    "tag": "Hero",
    "img": image2,
    "motto": "slash and burn"
  },
  {
    "title": "berserker",
    "img": image3,
    "motto": "All shall end"
  },
  {
    "title": "AOT",
    "img": image4,
    "motto": "tatake"
  }
];

function App() {

  const [isloading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);

  return (
    <div className=" h-screen w-fit flex items-center justify-center pl-2">
   
    <div className=' flex gap-2'>
      {[...data,...data,...data,...data].map((item,index)=>(
        <div key={index}>
          {isloading ? <Skeleton/>:<Card props={item}/>}
           </div>
      ))}
     
    </div>
     
    </div>
  )
}

export default App
