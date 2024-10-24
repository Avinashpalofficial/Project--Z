import { Outlet ,Link, useLocation } from "react-router-dom";

const Layout = () =>{
  const location = useLocation();
  const hidenavpath = ["/Logo","/Signup","/Pricing","Support"]
  const shouldnavpath = hidenavpath.includes(location.pathname)

   if(shouldnavpath){
    return <Outlet/>
   }
   else{

     return (
         <> 
 
           <nav>
             <table>
              <th><Link to="/Logo">Logo</Link></th>
              <th><Link to = "/Signup">Signup</Link></th>
              <th><Link to= "/About">About</Link></th>
              <th><Link to ="/Products">Products</Link></th>
              <th><Link to = "/Pricing">Princing</Link></th>
              <th><Link to ="/Support">Support</Link></th>
             </table>
               
           </nav>      
       <Outlet/>
       </>
     )
   }
}
export default  Layout