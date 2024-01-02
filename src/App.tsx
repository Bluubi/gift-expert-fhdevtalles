import './App.module.css'
import {createContext} from "react";

const logged = localStorage.getItem('username') !== null;
  const LoginContext = createContext(logged);

  function App() {


  return (
        <LoginContext.Provider value={logged}>
      { logged ? 'Welcome user' : 'Welcome'}
      <div> GiftExpert </div>
        </LoginContext.Provider>
  )
}

export default App
export { LoginContext };
