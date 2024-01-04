import './App.module.css'
import {createContext, useEffect, useState} from "react";
import styles from './App.module.css'
import {getTrendingGiphs, Giph} from "./features/giph/domain/giph.ts";
import {toModel} from "./features/giph/infraestructure/giph-adapter.ts";
import {GiphModel} from "./features/giph/domain/giph-model.ts";
import {NavLink, Outlet} from "react-router-dom";

const logged = localStorage.getItem('username') !== null;

const LoginContext = createContext(logged);


function App() {

    const [ data, setData ] = useState<GiphModel[]>()

    useEffect(() => {
    async function resolveData(){
        const trending = await getTrendingGiphs() as Giph;
        const giphModelCreated = trending?.data.map(g => toModel(g));
        setData(giphModelCreated);
    }
    resolveData();
    }, [])

    return (
        <LoginContext.Provider value={logged}>
          { logged ? 'Welcome user' : 'Welcome'}
          <div> GiftExpert </div>
          <div className={styles.container}>
            <p>Trending Gifs</p>
              <Outlet />
              <div className={styles.linkPagination}>
                  { data?.map((_, index) => {
                      if(index > (data?.length/ 6)){ return; }
                      return <NavLink to={`page/${index}`} replace={true} className={({isActive}) => isActive ? styles.pageActive: "" }> { index }</NavLink>
                  })}
              </div>

          </div>
        </LoginContext.Provider>
    )
}


export default App
export { LoginContext };
