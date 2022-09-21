import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topbar/TopBar";
import Home from './pages/home/Home'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductsList from "./pages/productList/ProductsList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
function App() {
  return (
    <Router>
     <TopBar/>
     <div className="container">
      <Sidebar/>
      <Routes>
        <Route exact path="/" element={<Home/>}>
      </Route>
      <Route path="/users" element={<UserList/>}>
      </Route>  
      <Route path="/user/:userId" element={<User/>}>
      </Route>          
      <Route path="/newUser" element={<NewUser/>}>
      </Route>  
      <Route path="/products" element={<ProductsList/>}>
      </Route>  
      <Route path="/product/:productId" element={<Product/>}>
      </Route>          
      <Route path="/newProduct" element={<NewProduct/>}>
      </Route>  
      </Routes>
     </div> 
    </Router>
  );
}

export default App;
