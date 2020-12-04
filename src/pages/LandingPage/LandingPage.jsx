import React, { Component } from 'react';
import Axios from 'axios';
import apiUrl from '../../support/constant/apiUrl';
import MyCarousel from '../../component/MyCarousel';
import Footer from './Component/Footer/Footer';
import BestSeller from './Component/BestSeller';
import FlashSale from './Component/FlashSale';
import BrandsLandingPage from './Component/BrandsLandingPage';
import gbr1 from './../../support/images/gambar-lp-1.jpg'
import gbr2 from './../../support/images/gambar1.jpg'
import gbr3 from './../../support/images/gambar2.jpeg'



class LandingPage extends Component {

    state={
        data : null,
        bestSellerData : null,
        colabsIsClickable : false,
        colabsIsClickable2 : false
    }

    componentDidMount(){
        this.getAllProducts()
    }

    getAllProducts = () => {
        Axios.get(apiUrl + 'product')
        .then((res) => {
            // console.log(res.data)
            this.setState({data : res.data})
            this.renderDataBestSeller()
        })
        .catch((err) => {
            alert(err.message)
        })
    }


    renderDataBestSeller = () => {
        Axios.get(apiUrl + 'transactions')
        .then((res) => {
            var sold = []

            // loping 2 kali buat dapetin detailnya
            res.data.forEach((val) => {
                val.detail.forEach((prod) => {
                    // isAda true ketika nama ada dua atau lebi
                    var isAda = false
                    // indexAda adalah index yg namnya ada dua atau lebih
                    var indexAda = null

                    // lopping di sold yg belum ada ==> jika prod.product_name sudah ada di sold
                    // yang artinya prod_name tersebut duplicate maka qty nya yg ditambahin bukan di push si prodnya
                    for(var i = 0 ; i < sold.length ; i ++){
                        if(sold[i].product_name === prod.product_name){
                            isAda = true
                            indexAda = i
                        }
                    }
                    if(isAda){
                        sold[indexAda].qty += prod.qty
                    }else{
                        sold.push(prod)
                    }
                })
                sold.sort((a,b) => {
                    return b.qty - a.qty
                })
            })
            sold = sold.slice(0,6)
            sold.forEach((val, index) => {
              this.state.data.forEach((data) => {
                  if(val.product_name === data.name){
                      sold[index]['poduct_id'] = data.id
                      sold[index]['product_discount'] = data.discount
                  }
              })
            })
            // console.log(sold)
            this.setState({bestSellerData : sold})
        })
        .catch((err) => {
            console.log(err)
        })
        
    }

    render() {
        return (
            <div >
                <MyCarousel/>

                <div className='pt-4 px-3 '>
                    <div className='instinct-container mt-'>
                        <div className="row" style={{height : '400px'}}>
                            <div className="col-md-6" style={{backgroundImage : `url(${gbr1})`, backgroundSize : 'cover', backgroundPosition : 'center'}}>
                                
                            </div>

                            <div className="col-md-6 m-0 p-0 pl-4">
                                <div className=' h-100 row m-0 p-0'>

                                    <div className="col-md-6 p-0 m-0 pr-1" onMouseEnter={() => this.setState({colabsIsClickable : true})} onMouseLeave={() => this.setState({colabsIsClickable : false})}>
                                        <div className={this.state.colabsIsClickable ? "border h-100 colabs" : "border h-100"} style={{backgroundImage : `url(${gbr2})`, backgroundSize : 'cover', backgroundPosition : 'center',position : 'relative'}}>
                                            {
                                            this.state.colabsIsClickable === true ?
                                            <div className='h-100 d-flex justify-content-center align-items-center flex-column' >
                                                <h4 style={{color : 'white', fontSize : 28, zIndex : 1}}>Vans X Toy Story</h4>
                                                <p style={{color : 'white', fontSize : 14, zIndex : 1}}>Jump into the land of sprinkles and smiles with.</p>
                                                <input type="button" value="Shop Now" className='btn btn-warning mt-3' style={{zIndex : 1}}/>
                                            </div>
                                            :null
                                            }
                                        </div>
                                    </div>
                                    <div className="col-md-6 p-0 m-0 pl-1" onMouseEnter={() => this.setState({colabsIsClickable2 : true})} onMouseLeave={() => this.setState({colabsIsClickable2 : false})}>
                                        <div className={this.state.colabsIsClickable2 ? "border h-100 colabs" : "border h-100"} style={{backgroundImage : `url(${gbr3})`, backgroundSize : 'cover', backgroundPosition : 'center'}}>
                                            {
                                            this.state.colabsIsClickable2 === true ?
                                            <div className='h-100 d-flex justify-content-center align-items-center flex-column' >
                                                <h4 style={{color : 'white', fontSize : 28, zIndex : 1}}>Vans X The Simpson</h4>
                                                <p style={{color : 'white', fontSize : 14, zIndex : 1}}>Jump into the land of sprinkles and smiles with.</p>
                                                <input type="button" value="Shop Now" className='btn btn-warning mt-3' style={{zIndex : 1}}/>
                                            </div>
                                            :null
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BrandsLandingPage />

                <FlashSale data={this.state.data} />

                <BestSeller data={this.state.bestSellerData} />


            </div>
        );
    }
}

export default LandingPage;