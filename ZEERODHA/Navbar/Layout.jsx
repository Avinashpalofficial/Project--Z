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
            <div className="flex  h-24">
              <div className="w-2/6 translate-x-[40%]">
                
                  
                 <div className="w-40 inline-block my-6 ">
                  <Link to= "/Logo"><img src="https://zerodha.com/static/images/logo.svg"  alt="" /></Link>
                 </div>
                
              </div> 
                 <div className=" max-w-6xl translate-x-[45%] ">
                 <div className="flex justify-center mx-16 my-1   translate-x-10  space-x-1  ">
                    <div className="w-28 h-20 pt-6 pl-6"><Link to= "/Signup">Signup</Link></div>
                     <div className="w-28 h-20 pt-6 pl-6"><Link to= "/About">About</Link></div>
                     <div className="w-40 h-20 pt-6 pl-10"><Link to ="/Products">Products</Link></div>
                     <div className="w-28 h-20 pt-6 pl-6"><Link to = "/Pricing">Pricing</Link></div>
                     <div className="w-28 h-20 pt-6 pl-6"><Link to ="Support">Support</Link></div>
              
                 </div>
                 </div>
            </div>

    )
    
  }
  
}
export default  Layout
//        <> 
//         <div className="flex justify-center  w-2xl">
      
//            <table>
//             <div><th><Link to="/Logo">Logo</Link></th></div>
//             <div className="flex justify-center">
//             <th><Link to = "/Signup">Signup</Link></th>
//             <th><Link to= "/About">About</Link></th>
//             <th><Link to ="/Products">Products</Link></th>
//             <th><Link to = "/Pricing">Princing</Link></th>
//             <th><Link to ="/Support">Support</Link></th>
//             </div>
            
//            </table>
             
              
//         </div>
         
//      <Outlet/>
//      </>