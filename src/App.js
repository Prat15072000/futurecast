import "./App.scss";
import Navba from "./components/Navbar/Navbar";
import home from "./pages/home/home";
import blogs from "./pages/blogs/blogs";
import Podcast from "./pages/Podcast/podcast";
import { keyframes } from "styled-components";
import Blog from "./pages/Blog/Blog";
import { AnimatePresence, motion } from "framer-motion";
import Contact from "./pages/Contact/Contact";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Creator from "./pages/Creator/Creator";
import Privacy from "./pages/Privacy-Statement/Privacy-Statement";
import Swag from "./pages/Swag/Swag";
import BugBounty from "./pages/Responsible-Disclosure/Responsible-Disclosure";
import Career from "./pages/Career/Career";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import Popup from "./components/popup/popup";
import ScrollToTop from "./ScrolltoTop";
import Support from "./pages/Support/Support";
import { Fragment } from "react";
import Popup2 from "./components/popup_2/popup_2";
const pageVariants = {
  initial: {
    opacity: 0,
    x: "200vw",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 1,
    x: "200vw",
    duration: "2",
  },
};
const pageTransition = {
  type: "spring",
  ease: "easeIn",
  duration: 1,
};
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <ScrollToTop />
      <Navba />
      <AnimatePresence>
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact component={home} />
            <Route path="/Podcast" exact component={Podcast} />
            {/* dynammic states from here */}
            <Route path="/Blog/:id" exact component={Blog} />
            <Route path="/Contact" exact component={Contact} />{" "}
            <Route
              path="/Contact/:id"
              exact
              render={() => (
                <Fragment>
                  <Contact />
                  <Popup2 />
                </Fragment>
              )}
            />
            <Route path="/Creator-form" exact component={Creator} />
            <Route
              path="/Creator-form/:id"
              exact
              render={() => (
                <Fragment>
                  <Creator />
                  <Popup2 />
                </Fragment>
              )}
            />
            <Route path="/Blogs" exact component={blogs} />
            <Route path="/Privacy-Policy" exact component={Privacy} />
            <Route path="/Swag" exact component={Swag} />
            <Route path="/Responsible-Disclosure" exact component={BugBounty} />
            <Route path="/Careers" exact component={Career} />
            <Route path="/About" exact component={About} />
            <Route path="/Support" exact component={Support} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </motion.div>
      </AnimatePresence>
      <Footer />
      <Route
        path={[
          "/",
          "/Blogs",
          "/Privacy-Policy",
          "/Swag",
          "/Responsible-Disclosure",
          "/Careers",
          "/About",
          "/Support",
          "/Creator-form",
          "/Contact",
          "/Blog/Sample",
          "/Podcast",
        ]}
        exact
        component={Popup}
      />
    </div>
  );
}

export default App;
