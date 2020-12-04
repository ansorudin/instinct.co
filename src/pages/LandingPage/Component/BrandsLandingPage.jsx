import React, { Component } from 'react'
import Logo1 from './../../../support/images/nike-logo.png'
import Logo2 from './../../../support/images/adidas-logo.png'
import Logo3 from './../../../support/images/converse-logo.png'
import Logo4 from './../../../support/images/stussy-logo.png'
import Logo5 from './../../../support/images/puma-logo.png'
import Logo6 from './../../../support/images/vans-logo.png'


export class BrandsLandingPage extends Component {
    render() {
        return (
            <div className="py-5 px-3">
                <div className="instinct-container mt-4">
                    <div className="row mt-4 align-items-center justify-content-around ">
                        <div className="col-4 col-md-1   h-100">
                            <img className='mx-2' alt='brand-logo' src={Logo1} width='100%'/>
                        </div>
                        <div className="col-4 col-md-1  h-100">
                            <img className='mx-2 ' alt='brand-logo' src={Logo2} width='100%'/>
                        </div>
                        <div className="col-4 col-md-1   h-100">
                            <img className='mx-2' alt='brand-logo' src={Logo3} width='100%'/>
                        </div>
                        <div className="col-4 col-md-1  h-100">
                            <img className='mx-2 ' alt='brand-logo' src={Logo4} width='100%'/>
                        </div>
                        <div className="col-4 col-md-1   h-100">
                            <img className='mx-2' alt='brand-logo' src={Logo5} width='100%'/>
                        </div>
                        <div className="col-4 col-md-1  h-100">
                            <img className='mx-2 ' alt='brand-logo' src={Logo6} width='100%'/>
                        </div>
                    </div>
                    <p className='text-brands'>And many more from various Brands</p>
                </div>
            </div>
        )
    }
}

export default BrandsLandingPage
