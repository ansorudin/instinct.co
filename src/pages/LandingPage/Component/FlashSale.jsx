import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class FlashSale extends Component {
    render() {
        let data = this.props.data
        return (
            <div className="py-5 px-3 ">
                <div className="instinct-container mt-2">
                <div className="ml-3">
                        <span className="border-double my-landing-page-font">BEST PRICE FOR YOU</span>
                        <p className='landing-page-text-child'>Our most trending products based on Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, amet?</p>
                    </div>
                    <div  className="container-fluid mt-5  h-100 ">
                        <div className="row flex-nowrap " style={{overflow:'auto'}}>
                            
                            {/* card image flash sale */}

                            {
                                data && data.map((val) => {
                                    if(val.discount){
                                        return (
                                            <div className="col-4 col-md-2 sporteens-clickable-el h-100" key={val.id}>
                                                <div>
                                                    <Link to={'/detail-product/' + val.id} className='my-link'>
                                                    {/* Image */}
                                                    <div className='py-2'>
                                                        <img  src={val.image1} className='align-self-center img-fluid sporteens-thumbnail-img img-thumbnail' alt='gambar gagal'/>
                                                    </div>
                                                    
                                                    {/* Detail price etc */}
                                                    <div className="mt-md-3 mt-1 d-flex flex-column">
                                                        <p className='p-0 m-0 sporteens-main-dark image-font-flash-sale-title'>{val.name.length >= 30 ? val.name.slice(0,30) + '...' : val.name}</p>
    
                                                        <div className='d-flex mt-1 mb-1'>
                                                            <p className='p-0 m-0 text-secondary image-font-flash-sale-isi'> <s>Rp. {val.price.toLocaleString('id-ID')}</s> </p>
                                                            <p className='p-0 m-0 text-danger ml-1 image-font-flash-sale-isi'>(-{val.discount}%)</p>
                                                        </div>
                                                    
                                                        <p className='p-0 m-0 sporteens-main-dark font-weight-bold image-font-flash-sale-isi'>Rp. {(val.price-(val.price * (val.discount/100))).toLocaleString('id-ID')} </p>
                                                    </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                    }else{
                                        return(
                                            null
                                        )
                                    }
                                })
                            }

                            {/* End card image flash sale */}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FlashSale
