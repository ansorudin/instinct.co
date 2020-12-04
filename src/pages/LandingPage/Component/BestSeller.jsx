import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class BestSeller extends Component {

    render() {
        let data = this.props.data
        return (
            <div className="py-5 px-3 sporteens-bg-light-dark">
                <div className="instinct-container mt-4">
                    <div className="ml-3">
                        <span className="border-double my-landing-page-font">RECOMENDED FOR YOU</span>
                        <p className='landing-page-text-child'>Our most trending products based on Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, amet?</p>
                    </div>
                    <div  className="container-fluid mt-5  h-100 ">
                        <div className="row  " >
                            {
                                data && data.map((val, index) => {
                                    return (
                                        <div className="onHoverCard col-6 col-md-2 sporteens-clickable-el h-100" key={index}>
                                            <div>
                                                <Link to={'/detail-product/' + val.poduct_id} className='my-link'>
                                                {/* Image */}
                                                <div className='py-2'>
                                                    <img src={val.product_image} className='align-self-center img-fluid sporteens-thumbnail-img img-thumbnail' alt='gambar gagal'/>
                                                </div>
                                                
                                                {/* Detail price etc */}
                                                <div className="mt-md-3 mt-1 d-flex flex-column">
                                                    <p className='p-0 m-0 sporteens-main-dark image-font-flash-sale-title'>{val.product_name.length >= 30 ? val.product_name.slice(0,30) + '...' : val.product_name}</p>
                                                    {
                                                        val.product_discount ? 
                                                        <span>
                                                            <div className='d-flex mt-1 mb-1'>
                                                                <p className='p-0 m-0 text-secondary image-font-flash-sale-isi'> <s>Rp. {val.product_price.toLocaleString('id-ID')}</s> </p>
                                                                <p className='p-0 m-0 text-danger ml-1 image-font-flash-sale-isi'>(-{val.product_discount}%)</p>
                                                            </div>
                                                        
                                                            <p className='p-0 m-0 sporteens-main-dark font-weight-bold image-font-flash-sale-isi'>Rp. {(val.product_price-(val.product_price * (val.product_discount/100))).toLocaleString('id-ID')} </p>
                                                        </span>
                                                        :
                                                        <p className='p-0 m-0 sporteens-main-dark font-weight-bold image-font-flash-sale-isi'>Rp. {val.product_price.toLocaleString('id-ID')} </p>
                                                    }
                                                </div>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        
                        </div>
                    </div>
                    <div className='text-center mt-5'>
                        <span className='sporteens-clickable-el sporteens-onhover sporteens-font-14'>Load More...</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default BestSeller
