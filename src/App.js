import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Screens/Home/Home.jsx'
const Blogs = () => {
  return (
    <div><h1>Blogs</h1></div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
      {/* <Route path="/" element={<Layout />}> */}
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
         {/*  <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
