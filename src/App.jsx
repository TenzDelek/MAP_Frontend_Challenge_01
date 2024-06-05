import Card from "./components/cards/Card"
import Skeleton from "./components/cards/Skeleton";
import data from "./json/Data.json"
import { useEffect, useState } from "react";
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
