import React from 'react';
import  '../styles/Footer.scss';

export default function Footer() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md' id="footer-col1-2">
                    <h2>Our Awards</h2>
                    <p>
                    London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the United Kingdom.
                    </p>
                    <img src='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png' alt='logo-footer'/>
                </div>
                <div className='col-md' id="footer-col1-2">
                    <h2>Contact Info</h2>
                    <p>
                        <ion-icon name="phone-portrait-sharp"></ion-icon>
                        1-567-124-44227
                    </p>
                    <p>
                        <ion-icon name="location-outline"></ion-icon>
                        184 Main Street East Perl Habour 8007
                    </p>
                    <p>
                        <ion-icon name="alarm-outline"></ion-icon>
                        Mon - Sat 8.00 - 18.00 Sunday CLOSED
                    </p>
                    <div className='social-media'>
                        <ul>
                            <li className='facebook'>
                                <a href='#'>
                                    <i className="fa fa-facebook" />
                                </a>
                            </li>
                            <li className='twitter'>
                                <a href='#'>
                                    <i className="fa fa-twitter" />
                                </a>
                            </li>
                            <li className='youtube'>
                                <a href='#'>
                                    <i className="fa fa-youtube" />
                                </a>
                            </li>
                            <li className='pinterest'>
                                <a href='#'>
                                    <i className="fa fa-pinterest" />
                                </a>
                            </li>
                            <li className='instagram'>
                                <a href='#'>
                                    <i className="fa fa-instagram" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-md'>
                    <h2>Recent Trips</h2>
                    <div className='footer-flex'>
                        <div className='footer-flex-item'>
                            <img src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" alt=""/>
                        </div>
                        <div className='footer-flex-item'>
                            <img src="https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg" alt="" className='footer-flex-item-img'/>
                        </div>
                        <div className='footer-flex-item'>
                            <img src="https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg" alt=""/>
                        </div>
                        <div className='footer-flex-item'>
                            <img src="https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg" alt=""/>
                        </div>
                        <div className='footer-flex-item'>
                            <img src="https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg" alt=""/>
                        </div>
                        <div className='footer-flex-item'>
                            <img src="https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='footer-bottom-nav'>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Tours</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Purchase</a></li>
                        <li><a href="#">Theme</a></li>
                    </ul>
                </div>
                <div className="">
                    © Copyright Grand Tour Theme Demo - Theme by ThemeGoods
                </div>
            </div>
        </div>
    )
}