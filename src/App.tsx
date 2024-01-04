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
            <header className={styles.messageWelcome}>
                <h1 className={styles.message}>{ logged ? 'Welcome user to  GiftExpert' : 'Welcome to  GiftExpert'}</h1>
            </header>
          <section className={styles.container}>
            <h1 className={styles.trending}>Trending Gifs</h1>
              <Outlet />
              <section className={styles.linkPagination}>
                  { data?.map((_, index) => {
                      if(index > (data?.length/ 6)){ return; }
                      return <NavLink to={`page/${index}`} replace={true} className={({isActive}) => isActive ? styles.pageActive: "" }> { index }</NavLink>
                  })}
              </section>

          </section>
        </LoginContext.Provider>
    )
}


export default App
export { LoginContext };
