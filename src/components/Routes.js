import { Route, Router, Routes } from "react-router-dom";
import Experiences from "./Experiences";
import Contact from "./Contact";
import Home from "./Home";

export default function CustomRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        {/* <Route path="/experiences" component={Experiences} />
        <Route path="/contact" component={Contact} /> */}
      </Routes>
    </Router>
  );
}
