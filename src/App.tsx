import './App.css'
import {useContext} from "react";
import {LoginContext} from "./features/login/ui/login.page.tsx";

function App() {

  const logged  = useContext(LoginContext)

  return (
    <div>
      { logged ? 'Welcome user' : 'Welcome'}
    </div>
  )
}

export default App
