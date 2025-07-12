import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import AsianAirlines from "./pages/Projects/AsianAirlines/AsianAirlines";

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
