
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import MainLayout from './MainLayout/MainLayout';

import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<AboutMe />} />
      <Route path="projects" element={<Projects />} />
      <Route path="experiences" element={<Experience />} />
      <Route path="resume" element={<Resume />} />
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
