import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import AsianAirlines from "./pages/Projects/AsianAirlines/AsianAirlines";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route
                        path="/FSA-Asian-Airlines"
                        element={<AsianAirlines></AsianAirlines>}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
