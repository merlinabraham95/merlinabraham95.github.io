import { Link, Route, Router, Routes } from "react-router-dom";
import Experiences from "./Experiences";
import Contact from "./Contact";

export default function Home() {

    return (

    <div id="colorlib-page">


<Router>
  <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
  <aside id="colorlib-aside" role="complementary" className="js-fullheight text-center">
    <h1 id="colorlib-logo"><Link to="/">merlin<span>.</span></Link></h1>
    <nav id="colorlib-main-menu" role="navigation">
      <ul>
        <li className="colorlib-active"><Link to="/">Home</Link></li>
        <li><Link to="/experiences">Experiences</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </aside>
  <Routes>
     <Route exact path="/" component={Home} />
     <Route path="/experiences" component={Experiences} />
    <Route path="/contact" component={Contact} />
  </Routes>
</Router>


		<div id="colorlib-main">
			<div className="hero-wrap js-fullheight" style={{backgroundImage: 'url(images/bg_1.jpg)'}} data-stellar-background-ratio="0.5">
				<div className="overlay"></div>
				<div className="js-fullheight d-flex justify-content-center align-items-center">
					<div className="col-md-8 text text-center">
						<div className="img mb-4" style={{backgroundImage: "url(images/author.jpg)"}}></div>
						<div className="desc">
							<h2 className="subheading">Hello I'm</h2>
							<h1 className="mb-4">Merlin Mary Abraham</h1>
							<p className="mb-4">I am A Blogger Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
							
						</div>
					</div>
				</div>
			</div>
        </div>
    </div>
			
    );
}