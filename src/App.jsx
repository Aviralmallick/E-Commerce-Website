import {Route,Routes} from "react-router"
import HomePage from "./pages/HomePage/HomePage"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import'./App.css'
import Navbar from "./Components/Navbar/Navbar"
import Detail from "./pages/Details/Detail"
import Cart from "./pages/Cart/Cart"
import Catagories from "./pages/Catagories/Catagories"
import Products from "./pages/Products/Products"
import Login from "./pages/Auth/Login/Login"
import Signup from "./pages/Auth/Signup/Signup"
import Auth from "./pages/Auth/Auth"
import Footer from "./Components/Footer/Footer"


const App = () => {
  console.log("app file");

  
  return (
    <>
    
    <Navbar/>
    <Routes>
      <Route path = "/" element={<HomePage/>}/>
      <Route path = "/cart" element={<Cart/>}/>
      <Route path = "/profile" element={<ProfilePage/>}/>
      <Route path = "/details/:id" element={<Detail/>}/>
      <Route path = "/categories" element={<Catagories/>}/>
      <Route path = "/products/:category" element={<Products/>}/>
      <Route path = "/login" element={<Login/>}/>
      <Route path = "/signup" element={<Signup/>}/>
      <Route path = "/auth" element={<Auth/>}/>
    </Routes>
     <Footer/>
    </>
  )
}

export default App