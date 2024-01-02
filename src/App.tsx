import './App.css'
import {createContext} from "react";
import HeaderComponent from "./features/header/header.component.tsx";

  const logged = localStorage.getItem('username') !== null;
  const LoginContext = createContext(logged);

  function App() {


  return (
    <div>
        <HeaderComponent />
        <LoginContext.Provider value={logged}>
      { logged ? 'Welcome user' : 'Welcome'}
      <div> GiftExpert </div>
        </LoginContext.Provider>
    </div>
  )
}

export default App
export { LoginContext };
