import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import  AllRoutes  from "./Routes/Routes";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        {AllRoutes.map((route,index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
