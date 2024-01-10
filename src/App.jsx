import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from "./components/Layout.jsx";
import { Home } from "./pages/Home.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Locations } from "./pages/Locations.jsx";
import { Company } from "./pages/Company.jsx";
import { GraphicDesign } from "./pages/GraphicDesign.jsx";
import { AppDesign } from "./pages/AppDesign.jsx";
import { WebDesign } from "./pages/WebDesign.jsx";

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path={'/'} element={<Layout />}>
             <Route path={'/'} element={<Home />}></Route>
             <Route path={'/company'} element={<Company />}></Route>
             <Route path={'/locations'} element={<Locations />}></Route>
             <Route path={'/contact'} element={<Contact />}></Route>
             <Route path={'/web-designs'} element={<WebDesign />}></Route>
             <Route path={'/app-designs'} element={<AppDesign />}></Route>
             <Route path={'/graphic-designs'} element={<GraphicDesign />}></Route>
             <Route path={'/*'} element={<Home />}></Route>
          </Route>
       </Routes>
    </BrowserRouter>
  )
}

export default App
