import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Header} from "./header/Header";
import {Pages} from "./pages/Pages";

function App() {
  return (
    <div className="App">
        <HashRouter>
            <Header />
            <Pages />
        </HashRouter>



      {/*hashrouter, provider*/}
      <>
        {/*/!*<Main />*!/  header и router отрисуем в Main */}

      </>

    </div>
  );
}

export default App;
