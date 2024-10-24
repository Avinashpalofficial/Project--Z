import { BrowserRouter,Routes,Route } from "react-router-dom";
import Logo from "./Logo"
import Signup from "./Signup";
import About from "./About";
import Products from "./Products";
import Pricing from "./Pricing";
import Support from "./Support";
import Layout from "./Layout";

export default function Component (){
    return (
        <BrowserRouter>
         <Routes>
          <Route path="" element ={<Layout/>}>
            <Route path="Logo" element ={<Logo/>}/>
            <Route path="Signup" element ={<Signup/>}/>
            <Route path="About" element ={<About/>}/>
            <Route path="Products" element ={<Products/>}/>
            <Route path="Pricing" element ={<Pricing/>}/>
            <Route path="Support" element ={<Support/>}/>
            
          </Route>
         </Routes>
        </BrowserRouter>
    )
}