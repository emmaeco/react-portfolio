import React from 'react'
import IMG from '../../assets/img1.jpg'
import IMG2 from '../../assets/img2.jpg'
import IMG3 from '../../assets/img3.jpg'
import IMG4 from '../../assets/img4.jpg'
import './portfolio.css'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My recent work</h5>
            <h2>portfolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__items">
                    <div className="portfolio__item-image">
                        <img src={IMG} alt=""/>
                    </div>
                    <h3>This is a portfolio item tittle</h3>
                     <div className="portfolio__items-cta">
                        <a href="http/github.com" className="btn">Github</a>
                        <a href="http/github.com" className="btn btn-primary">live demo</a>
                     </div>   
                        

                </article>
                <article className="portfolio__items">
                    <div className="portfolio__item-image">
                        <img src={IMG2} alt=""/>
                       
                    </div>
                    <h3>This is a portfolio item tittle</h3>
                    <div className="portfolio__items-cta">
                        <a href="http/github.com" className="btn">Github</a>
                        <a href="http/github.com" className="btn btn-primary">live demo</a>
                     </div>

                </article>
                <article className="portfolio__items">
                    <div className="portfolio__item-image">
                        <img src={IMG3} alt=""/>
                       
                    </div>
                    <h3>This is a portfolio item tittle</h3>
                    <div className="portfolio__items-cta">
                        <a href="http/github.com" className="btn">Github</a>
                        <a href="http/github.com" className="btn btn-primary">live demo</a>
                     </div>
                        

                </article>
                <article className="portfolio__items">
                    <div className="portfolio__item-image">
                        <img src={IMG4} alt=""/>
                       
                    </div>
                    <h3>This is a portfolio item tittle</h3>
                    <div className="portfolio__items-cta">
                        <a href="http/github.com" className="btn">Github</a>
                        <a href="http/github.com" className="btn btn-primary">live demo</a>
                    </div>
                        

                </article>
                <article className="portfolio__items">
                    <div className="portfolio__item-image">
                        <img src={IMG3} alt=""/>
                       
                    </div>
                    <h3>This is a portfolio item tittle</h3>
                    <div className="portfolio__items-cta">
                        <a href="http/github.com" className="btn">Github</a>
                        <a href="http/github.com" className="btn btn-primary">live demo</a>
                    </div>

                </article>
                <article className="portfolio__items">
                    <div className="portfolio__item-image">
                        <img src={IMG2} alt=""/>
                       
                    </div>
                    <h3>This is a portfolio item tittle</h3>
                    <div className="portfolio__items-cta">
                        <a href="http/github.com" className="btn">Github</a>
                        <a href="http/github.com" className="btn btn-primary">live demo</a>
                     </div>

                </article>
            </div>
            
        </section>
    )
}

export default Portfolio
