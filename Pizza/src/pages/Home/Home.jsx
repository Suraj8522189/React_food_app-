import React from 'react'
import Layout from '../../component/layouts/layout';
import "../../styles/HomeStyle.css"
import Section1 from './section1';
import Section2 from './Section2';
import Section3 from './section3';
import Section4 from './section4';
import Section5 from './section5';
import Section6 from './Section6';
import Section7 from './section7';

function Home() {
  return (<>
    <Layout>
      {/* Home section hero banner */}
      <Section1/>

      {/* Home section about */}
      <Section2/>

      {/* Home Section card */}
      <Section3/>

      {/* Home Section promotion */}
      <Section4/>
      
       {/* Home section Shop */}
       <Section5/>

       {/* Home Section Blog */}
       <Section6/>
 
       {/* Home Section Contact  */}
       <Section7/>
    </Layout>
   </> )
}

export default Home