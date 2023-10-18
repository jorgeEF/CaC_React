import "./App.css";

import { PeliculasGrid } from "./PeliculasGrid";

export const App = () => {

    return(
        <div>
            <header className="title">Películas</header>
            <main>
                <PeliculasGrid/>
            </main>
        </div>
    )
}