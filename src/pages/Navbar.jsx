import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ModalLogin from '../component/ModalLogin';
import {Link} from 'react-router-dom'

export class Navbar extends Component{
    state ={
        openToggle : false
    }

   
    render(){
        return (
            <div>
            <div className="sporteens-bg-main-dark py-3 sporteens-light">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className='mr-3 sporteens-navbar-top d-none d-md-block'>
                            <div className="d-flex">
                                <FontAwesomeIcon icon={faUser}/>
                                <ModalLogin title='Login' margin='10px'/>
                                <span className='mx-1'> / </span> 
                                <Link to='/register' className='sporteens-clickable-el sporteens-link'>Register</Link>
                            </div>
                        </div>
                        <div className='mr-3 sporteens-navbar-top d-none d-md-block'>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <Link to='/carts' className='ml-2 sporteens-clickable-el sporteens-link'>Cart</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sporteens-bg-light py-4 navbar-sporteens">
                <div className="container">
                    <div className="row justify-content-between px-5 px-md-0">
                        {/* Header Logo */}
                        <div className="sporteens-main-dark sporteens-logo-header sporteens-clickable-el">
                            LOGO
                        </div>

                        {/* Header Items */}
                        <div className="sporteens-main-dark sporteens-items-header d-none d-md-block">
                            <span className='mr-md-3 sporteens-clickable-el'>
                                <Link to='/' className='sporteens-link'>Home</Link>  
                            </span>
                            <span className='mr-md-3 sporteens-clickable-el' >
                                <Link to='/products' className='sporteens-link'>Products</Link>
                            </span>
                            <span className='mr-md-3 sporteens-clickable-el'>
                            <Link to='/brands' className='sporteens-link'>Brands</Link>
                            </span>
                            <span className='mr-md-3 sporteens-clickable-el'>
                            <Link to='/sale' className='sporteens-link'>Sale</Link>
                            </span>
                        </div>

                        <div className="sporteens-main-dark sporteens-items-mobile d-md-none">
                            {this.state.openToggle ? 
                                <span onClick={() => this.setState({openToggle : false})} className='sporteens-clickable-el'>
                                    <FontAwesomeIcon icon={faTimes} />
                                    
                                </span>
                                :
                                <span onClick={() => this.setState({openToggle : true})} className='sporteens-clickable-el'>
                                    <FontAwesomeIcon icon={faBars} />
                                </span>
                            }
                        </div>
                        
                    </div>
                    {
                        this.state.openToggle ? 
                        <div className="sporteens-main-dark sporteens-header-items-mobile px-4 d-md-none">
                            <div className="mt-3 border-bottom sporteens-clickable-el">
                                Home
                            </div>
                            <div className="mt-3 border-bottom sporteens-clickable-el">
                                Products
                            </div>
                            <div className="mt-3 border-bottom sporteens-clickable-el">
                                Brands
                            </div>
                            <div className="mt-3 border-bottom sporteens-clickable-el">
                                Carts
                            </div>
                        </div>
                    : null
                    } 
                </div>
            </div>
            </div>
        )
    }
}

export default Navbar