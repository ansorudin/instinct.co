import { faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
                <div className="py-5 px-3">
                     <div className="instinct-container border-top border-bottom p-5 d-flex flex-column">
                        <div className="row">
                            <div className="col-md-3 contact-us">
                                <div className='footer-contact'>(+62) 000 123 456</div>
                                <div className='text-withLogo'>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className='mr-3' />
                                    Bandung, West Java, Indonesia
                                </div>
                                <div className='text-withLogo'>
                                    <FontAwesomeIcon icon={faEnvelope} className='mr-3' />
                                    instinct.info@support.com
                                </div>
                                <div className='mt-3'>
                                    <FontAwesomeIcon icon={faInstagram} className='mr-4' size='lg'/>
                                    <FontAwesomeIcon icon={faTwitter} className='mr-4' size='lg' />
                                    <FontAwesomeIcon icon={faFacebookSquare} size='lg'/>
                                </div>
                            </div>
                            <div className="col-md-2 term-us">
                                <p className='sporteens-font-16 font-weight-bold mb-2'>Term of Use</p>
                                <div className='sporteens-font-14'>
                                    <p className='mb-1 sporteens-clickable-el sporteens-onhover'>Privacy & Policy</p>
                                    <p className='mb-1 sporteens-clickable-el sporteens-onhover'>Return Policy</p>
                                    <p className='sporteens-clickable-el sporteens-onhover'>Shipping</p>
                                </div>
                            </div>
                            <div className="col-md-3 sporteens-font-14 item-term-us">
                                <p className='mb-1 sporteens-clickable-el sporteens-onhover'>Account</p>
                                <p className='mb-1 sporteens-clickable-el sporteens-onhover'>Wishlist</p>
                                <p className='mb-1 sporteens-clickable-el sporteens-onhover'>Shopping Cart</p>
                                <p className='mb-1 sporteens-clickable-el sporteens-onhover'>Track My Order</p>
                                <p className='sporteens-clickable-el sporteens-onhover'>Career</p>
                            </div>
                            <div className="col-md-3 subscribe">
                                <p className='sporteens-font-20 font-weight-bold mb-1'>Subscribe Newsletter</p>
                                <p className='sporteens-font-14 mb-3'>Let's stay updated on the latest products and offers</p>
                                <input type="text" placeholder='Enter your email' className='form-control' style={{width : '50%'}}/>
                            </div>
                        </div>

                     </div>
                        <div className='text-center mt-4 sporteens-font-14'>
                            © 2017 - 2020, PT. Instinct Indonesia.
                        </div>
                 </div>
        );
    }
}

export default Footer;