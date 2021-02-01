import React from 'react';
import './Home.css';
import Banner from './Banner.js';
import Card from './Card.js';

function Home() {
    return (
        <div className="home">  
            <Banner /> 


            <div className='home_section'>
               <Card 
                  src="https://images.unsplash.com/photo-1545175707-9eec1209f720?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" 
                  title=" Expericence Luxury"  
                  description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots"   />
               <Card 
                  src="https://images.unsplash.com/photo-1585295427549-29ef3448add5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                  title=" NATURE and LUXURY"
                  description="Contrary to popular belief, Lorem Ipsum is not simply random text. "  />
               <Card 
                 src="https://images.unsplash.com/photo-1503011510-c0e00592713b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                 title=" Decent amnemities"
                 description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots " />
            </div>
            <div className='home_section'>
               <Card  
                 src="https://images.unsplash.com/photo-1594099462046-1df31fd4a66c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                 title="Breathe in Medellin"
                 description="Contrary to popular belief, Lorem Ipsum is not simply random text."
                 price="$2,500/night"  />
               <Card 
               src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
               title="Enjoy Sunset"
               description="Contrary to popular belief, Lorem Ipsum is not simply random text."
               price="$1800/night" />
               <Card 
               src="https://images.unsplash.com/photo-1517480448885-d5c53555ba8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
               title="Personel Beach"
               description="Contrary to popular belief, Lorem Ipsum is not simply random text."
               price="$5000/night" />
            </div>  
       </div>
    )
}

export default Home;

