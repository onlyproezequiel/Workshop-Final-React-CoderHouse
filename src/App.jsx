import { Navigate, Route,Routes } from "react-router-dom"
import Layaut from "./components/Layaut"
import NavBar from "./components/NavBar"
import Inicio from "./pages/inicio"
import Cursos from "./pages/cursos"
import Imagenes from "./pages/imagenes"
import Login from "./pages/login"
import Registro from "./pages/registro"
import Footer from "./components/footer"




function App() {
  
  return (
    <>
      <div className="bg-black text-green-400 bg-gradient-to-r from-black via-gray-800 to-blackmin-h-screen ">
      

<NavBar></NavBar>

    <Layaut>
  
    <Routes>
      <Route path='/' element={<Inicio></Inicio>}></Route>
      <Route path='/cursos' element={<Cursos></Cursos>}></Route>
      <Route path='/imagenes' element={<Imagenes></Imagenes>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/registro' element={<Registro></Registro>}></Route>
      <Route path='*' element={<Navigate to="/"></Navigate>}></Route>
    </Routes>

    </Layaut>

    <Footer />


      </div>  
    </>
  )
}

export default App
