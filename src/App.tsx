import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects';
import Experience from './components/Experience';

import MainLayout from './MainLayout/MainLayout';

import './App.css';
interface ExternalRedirectProps {
  to: string;
}

const ExternalRedirect: React.FC<ExternalRedirectProps> = ({ to }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.open(to, '_blank');
  }, [navigate, to]);

  return null;
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<AboutMe />} />
      <Route path="projects" element={<Projects />} />
      <Route path="experiences" element={<Experience />} />
      <Route path="resume" element={<ExternalRedirect to="https://rxresu.me/emmacancode/bin-ma" />}/>
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
