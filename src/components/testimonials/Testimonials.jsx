import React from 'react'
import'./testimonials.css'
import AVAR from '../../assets/avar.jpg'
import AVAR2 from '../../assets/avar2.jpg'
import AVAR3 from '../../assets/avar3.jpg'

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from client</h5>
            <h2>Testimonials</h2>

            <div className="container testimonials__container">
               <article className="testimonials">
                   <div className="client__avatar">
                       <img src={AVAR} alt=""/>

                   </div>
                   <h5 className="client__name">john wash</h5>
                       <small className="client__review">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                           Laborum minima temporibus fuga accusamus delectus assumenda voluptates iusto omnis repellendus aut vero, 
                           pariatur dolor cum, eum nesciunt ab molestias non distinctio!
                       </small>

               </article>
               <article className="testimonials">
                   <div className="client__avatar">
                       <img src={AVAR2} alt=""/>

                   </div>
                   <h5 className="class__name">mosh doe</h5>
                       <small className="client__review">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                           Laborum minima temporibus fuga accusamus delectus assumenda voluptates iusto omnis repellendus aut vero, 
                           pariatur dolor cum, eum nesciunt ab molestias non distinctio!
                       </small>

               </article>
               <article className="testimonials">
                   <div className="client__avatar">
                       <img src={AVAR3} alt=""/>

                   </div>
                   <h5 className="client__name">jan burno</h5>
                       <small className="client__review">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                           Laborum minima temporibus fuga accusamus delectus assumenda voluptates iusto omnis repellendus aut vero, 
                           pariatur dolor cum, eum nesciunt ab molestias non distinctio!
                       </small>

               </article>
               
               

            </div>
        </section>
    )
}

export default Testimonials
