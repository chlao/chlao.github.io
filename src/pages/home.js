import React from "react"

import "src/styles/home.scss"

 const Home = () => {
   return (
     <section className="home">
       <div className="home__outer section__outer">
        <div className="home__inner">
           <p className="home__overline">Software Engineer</p>
           <h1 className="home__heading">Christine Lao</h1>
           <p className="home__subheading">Constantly striving to build elegant, flexible solutions that are beautiful inside and out </p>
           <p className="home__underline">Web. Design. Versatility</p>
         </div>
       </div>
     </section>
   )
 }

export default Home
