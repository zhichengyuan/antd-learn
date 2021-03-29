 import React from 'react'

 function Home() {
     return (
         <div>
             <h1>首页欢迎你 </h1>
         </div>
     )
 }
 Home.title = '首页';
 Home.wrappers = ['@/routes/PrivateRouter'];
 export default Home;