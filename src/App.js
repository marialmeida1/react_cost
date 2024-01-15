import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/pages/Home"
import Company from "./components/pages/Company"
import Contact from "./components/pages/Contact"
import NewProject from "./components/pages/NewProject"
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Projects from './components/pages/Projects';
import Container from './components/layout/Container';
import Project from './components/pages/Project';


function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/projects" Component={Projects} />
          <Route path="/company" Component={Company} />
          <Route path="/contact" Component={Contact} />
          <Route path="/newproject" Component={NewProject} />
          <Route path="/project/:id" Component={Project} />

        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
