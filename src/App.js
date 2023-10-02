import Authenfication from "./auth/Authenfication";
import Unauthenfication from "./auth/Unauthenfication";
let token = localStorage.getItem('token');


function App() {
  if(token){
    return <Authenfication/>
  }
  else{
    return <Unauthenfication/>
  }
}

export default App;
