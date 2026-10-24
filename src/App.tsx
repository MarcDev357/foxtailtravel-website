import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import ServicePage from './pages/ServicePage'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { services } from './data/site'

// The hosted preview can't use real URL paths, so it routes in memory.
const Router = import.meta.env.VITE_PREVIEW ? MemoryRouter : BrowserRouter

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          {services.map((s) => (
            <Route key={s.slug} path={s.slug} element={<ServicePage service={s} />} />
          ))}
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}
