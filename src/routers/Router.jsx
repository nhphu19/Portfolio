import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/layouts/Layout';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Project from '../pages/project/Project';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="projects" element={<Project />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;
