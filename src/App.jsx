import Card from "./components/cards/Card"
import data from "./json/Data.json"
function App() {


  return (
    <div className=" h-screen w-full flex items-center justify-center pl-20">
    <div className=' font-custom flex gap-2'>
      {[...data,...data,...data,...data,...data].map((item,index)=>(
        <div key={index}>
           <Card props={item}/>
           </div>
      ))}
     
    </div>
     
    </div>
  )
}

export default App
