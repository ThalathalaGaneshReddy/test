import logo from './logo.svg';
import './App.css';
import List from './list';
import { useEffect,useState } from 'react';

function App() {

  const [data,setData] = useState()

  useEffect(()=>{
     let list = [
      {
        name:"ganesh",
        email:"ganesh@gmail.com",
        phone:"2345678",
        age:"24"
      },
      {
        name:"mahesh",
        email:"mahesh@gmail.com",
        phone:"987654",
        age:"26"
      }
     ]
     setData(list)

  },[])

  return (
    <div className="App">
     <h2>users</h2>
     <div>
         
     </div>

    </div>
  );
}

export default App;
