import { useEffect, useState } from 'react';
import './App.css';

function formatName(user){
  return user.firstName + " " + user.lastName;
}
const user = {
  firstName: 'Amit',
  lastName: "Vasant"
}
function getGreeting(user){
  if (user){
    return <h1> Hello {user.firstName + ' ' + user.lastName}</h1>
  }
  else{
    return <h1> Hello Stranger !</h1>
  }

}


let interval = null;
function App() {
  const [time,setTime] = useState(new Date().toLocaleTimeString());

  useEffect(()=>{
    interval = setInterval(()=>{
      setTime(new Date().toLocaleTimeString());
    })
    return () =>{
      if(interval){
        clearInterval(interval);
      }
    }
  },[])

  const element = () => (
    <div>
        <h1> hello world</h1>
        <p> It is {time}  </p>
        
      </div>  );
      
  return (
    element()
  );
}  

export default App;
