import React, { Component } from 'react';
import Axios from 'axios'
import { Link } from 'react-router-dom';
import apiUrlReal from './../support/constant/apiUrlReal'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';


class testApiReal extends Component {


    state = {
        data : null,
        selectId : null
    }

    componentDidMount(){
        this.getAllProduct()
        
    }

    getAllProduct = () => {
        Axios.get(apiUrlReal + 'products')
        .then((res) => {
            // console.log(res)
            this.setState({data : res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    getUpdateData = () => {
        let id = this.state.selectId
        let data ={
            name : this.productName.value,
            price : this.productPrice.value,
            images_1 : this.images1.value,
            images_2 : this.images2.value,
            images_3 : this.images3.value,
            category_id : this.categoryId.value,
            stock : this.stock.value
        }
        // console.log(newData)

        Axios.patch(apiUrlReal + 'product/' + id, data)
        .then((res) => {
            this.setState({selectId : null})
            alert(res.data)
            
        })
        .catch((err) => {
            console.log(err)
        })

    }

    render() {
        return (
            <div className='text-center'>
                
                <h1>API REAL</h1>
                <table>
                    {
                        this.state.data && this.state.data.map((val, index) => {
                            return (
                                <tr key={index} >
                                    <td>
                                        {val.name}
                                    </td>
                                    <td className='pl-3'>
                                        {val.price}
                                    </td>
                                    <td className='pl-3 sporteens-clickable-el sporteens-onhover'>
                                        <Link to={'/test-app/detail/' + val.id}> See Detail</Link>
                                    </td>
                                    <td className='pl-3 sporteens-clickable-el sporteens-onhover' onClick={() => this.setState({selectId : val.id})}>
                                        Edit
                                        
                                    </td>
                                    <td className='pl-3 sporteens-clickable-el sporteens-onhover'>
                                        Delete
                                    </td>
                                    {
                                        this.state.selectId === val.id ?
                                            <Modal isOpen={this.state.selectId ? true : false}>
                                                <ModalHeader >
                                                    <FontAwesomeIcon icon={faTimes} onClick={() => this.setState({selectId : null})} className='sporteens-clickable-el'/>
                                                </ModalHeader>
                                                <ModalBody>
                                                    <form>
                                                        <div className="form-group">
                                                            <label>Name</label>
                                                            <input type="text" ref={(el) => this.productName = el} defaultValue={val.name} className='form-control'/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Price</label>
                                                            <input type="text" ref={(el) => this.productPrice = el} defaultValue={val.price} className='form-control'/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Images 1</label>
                                                            <input type="text" ref={(el) => this.images1 = el} defaultValue={val.images_1} className='form-control'/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Images 2</label>
                                                            <input type="text" ref={(el) => this.images2 = el} defaultValue={val.images_2} className='form-control'/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Images 3</label>
                                                            <input type="text" ref={(el) => this.images3 = el} defaultValue={val.images_3} className='form-control'/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Category Id</label>
                                                            <input type="text" ref={(el) => this.categoryId = el} className='form-control'/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Stock</label>
                                                            <input type="text" ref={(el) => this.stock = el}  className='form-control'/>
                                                        </div>
                                                        <input type="button" value="Submit" className='btn btn-outline-info' onClick={this.getUpdateData}/>
                                                    </form>
                                                </ModalBody>
                                            </Modal>
                                            :
                                            null
                                    }
                                </tr>
                                
                            )
                        })
                    }
                </table>
                
            </div>
        );
    }
}

export default testApiReal;