import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "src/styles/home.scss"

 const Home = () => {
   const data = useStaticQuery(
     graphql`
      query {
        allContentfulHome {
          edges {
            node {
              subheading
              underline
              overline
              heading
            }
          }
        }
      }
     `
   )

   const content = data.allContentfulHome.edges[0].node

   return (
     <section className="home">
       <div className="home__outer section__outer">
        <div className="home__inner">
           <p className="home__overline">{ content.overline }</p>
           <h1 className="home__heading">{ content.heading }</h1>
           <p className="home__subheading">{ content.subheading }</p>
           <p className="home__underline">{ content.underline }</p>
         </div>
       </div>
     </section>
   )
 }

export default Home
