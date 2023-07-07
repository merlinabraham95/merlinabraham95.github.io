import { Route, Routes } from "react-router-dom";
import Experiences from "./Experiences";
import Contact from "./Contact";
import Home from "./Home";

export default function CustomRoutes() {
  return (
    <Routes>
      <Route path="/experiences" component={Experiences} />
      <Route path="/contact" component={Contact} />
      <Route path="/" component={Home} />
    </Routes>
  );
}
