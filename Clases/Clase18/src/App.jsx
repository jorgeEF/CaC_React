import "./App.css";

import { PeliculasGrid } from "./components/PeliculasGrid";
import { LandingPage } from "./pages/LandingPage";

export const App = () => {

    return(
        <div>
            <header className="title">Películas</header>
            <main>
                <LandingPage/>
            </main>
        </div>
    )
}