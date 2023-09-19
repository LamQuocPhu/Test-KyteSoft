import React from "react";

export default function Features() {
  return (
    <section>
        <div className="feature1">
            <div className="standard-wrapper">
                <div className="feature1-content whychooseus">
                <h2>Popular Destinations</h2>
                <div className="standard-wrapper-tagline-feature1">
                    World's best tourist destinations
                </div>
                </div>
            </div>
            <div className="destination-grid">
                <div className="destination-grid-item">
                    <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg" alt="" className="destination-grid-img"/>
                    <h3>Tokyo</h3>
                </div>
                <div className="destination-grid-item">
                    <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg" alt="" className="destination-grid-img"/>
                    <h3>Seoul</h3>
                </div>
                <div className="destination-grid-item">
                    <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg" alt="" className="destination-grid-img"/>
                    <h3>Paris</h3>
                </div>
                <div className="destination-grid-item">
                    <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg" alt="" className="destination-grid-img"/>
                    <h3>London</h3>
                </div>
            </div> 
        </div>
        <div className="feature1">
        <div className="standard-wrapper">
            <div className="feature1-content whychooseus">
            <h2>Best Value Trips</h2>
            <div className="standard-wrapper-tagline-feature1">
                Best offers trips from us
            </div>
            </div>
        </div>
        <div className="destination-grid2">
            <div className="destination-grid-item2">
                <a href="#">
                    <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg" alt="" className="destination-grid-img2 hover-shadow"/>
                    <div className="tour-price">$5,000</div>
                </a>
                
                <div className="portfolio">
                    <h4>French Autumn</h4>
                    <p>City tours, Urban</p>
                    <div className="review">
                        <div className="rate">
                            <span><ion-icon name="star"></ion-icon></span>
                            <span><ion-icon name="star"></ion-icon></span>
                            <span><ion-icon name="star"></ion-icon></span>
                            <span><ion-icon name="star"></ion-icon></span>
                            <span><ion-icon name="star-outline"></ion-icon></span>
                            <div className="count-review">
                                4 reivews
                            </div>
                        </div>
                        
                        <div className="tour-days">
                            <i className="fa fa-clock-o"></i>
                            5 days
                        </div>
                    </div>
                </div>
            </div>
            <div className="destination-grid-item2">
                <a href="#">
                    <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg" alt="" className="destination-grid-img2"/>
                    <div className="tour-price">$6,000</div>
                </a>
                
                <div className="portfolio">
                    <h4>Grand Switzerland</h4>
                    <p>Shopping, Mountain, Snow & Ice</p>
                    <div className="review">
                        <div className="rate">
                            <span><ion-icon name="star"></ion-icon></span>
                            <span><ion-icon name="star"></ion-icon></span>
                            <span><ion-icon name="star"></ion-icon></span>
                            <span><ion-icon name="star"></ion-icon></span>
                            <span><ion-icon name="star-outline"></ion-icon></span>
                            <div className="count-review">
                                4 reivews
                            </div>
                        </div>
                        
                        <div className="tour-days">
                            <i className="fa fa-clock-o"></i>
                            6 days
                        </div>
                    </div>
                </div>
            </div>
            <div className="destination-grid-item2">
                <a href="#">
                    <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg" alt="" className="destination-grid-img2"/>
                    <div className="tour-price" style={{width: '140px'}}>
                        <span style={{textDecoration: 'line-through', opacity: '0.3', paddingRight: '5px'}}>$3,000</span>
                        $2,500
                    </div>
                </a>
                
                <div className="portfolio">
                    <h4>Discover Japan</h4>
                    <p>City Tours, Iconic</p>
                    <div className="review">
                        <div className="rate">
                            <span><ion-icon name="star"></ion-icon></span>
                            <span><ion-icon name="star"></ion-icon></span>
                            <span><ion-icon name="star"></ion-icon></span>
                            <span><ion-icon name="star"></ion-icon></span>
                            <span><ion-icon name="star-outline"></ion-icon></span>
                            <div className="count-review">
                                4 reivews
                            </div>
                        </div>
                        
                        <div className="tour-days">
                            <i className="fa fa-clock-o"></i>
                            5 days
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </div>
        <div className="whychooseus">
            <h2>Why Choose Us</h2>
            <div>Here are reasons you should plan trip with us</div>
        </div>
        <div className="layout">
            <div className="layout-item">
                <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png" alt="" className="layout-img"/>
                <h4><strong>Handpicked Hotels</strong></h4>
                <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
            </div>
            <div className="layout-item">
                <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png" alt="" className="layout-img"/>
                <h4><strong>World Class Service</strong></h4>
                <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
            </div>
            <div className="layout-item">
                <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png" alt="" className="layout-img"/>
                <h4><strong>Best Price Guarantee</strong></h4>
                <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
            </div>
        </div>
        <div className="bridge">
            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24377.jpg" alt=""/>
        </div>
        <div className="whychooseus">
            <h2>Articles & Tips</h2>
            <div>Explore some of the best tips from around the world</div>
        </div>
        <div className="layout">
            <div className="layout-item2">
                <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg" alt="" className="layout-img2"/>
                <div className="trip-details">
                    <div>
                        <a href="#" >December 10, 2016</a>
                    </div>
                    <h6>
                        <a href="#">Memorial Day to Someone Told Me to Travel</a>
                    </h6>
                    <p>
                        Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...
                    </p>
                    <div className="read-more">
                        <a href="#">Read More <ion-icon name="chevron-forward-outline"></ion-icon>
                        </a>
                    </div>
                </div>
            </div>
            <div className="layout-item2">
                <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg" alt="" className="layout-img2"/>
                
                <div className="trip-details">
                    <div>
                        <a href="#" >December 10, 2016</a>
                    </div>
                    <h6>
                        <a href="#">7 Tips For Nomads On A Budget Trips</a>
                    </h6>
                    <p>
                        Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...
                    </p>
                    <div className="read-more">
                        <a href="#">Read More <ion-icon name="chevron-forward-outline"></ion-icon>
                        </a>
                    </div>
                    
                </div>
            </div>
            <div className="layout-item2">
                <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg" alt="" className="layout-img2"/>
                <div className="trip-details">
                    <div>
                        <a href="#" >December 10, 2016</a>
                    </div>
                    <h6>
                        <a href="#">Taking A Travel Blog Victory Lap</a>
                    </h6>
                    <p>
                        Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...
                    </p>
                    <div className="read-more">
                        <a href="#">Read More <ion-icon name="chevron-forward-outline"></ion-icon>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  );
}
