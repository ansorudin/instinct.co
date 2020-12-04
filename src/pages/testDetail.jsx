import Axios from 'axios';
import React, { Component } from 'react';
import apiUrlReal from '../support/constant/apiUrlReal';

class testDetail extends Component {

    state ={
        data : null
    }

    componentDidMount(){
        this.getDataDetailProd()
    }

    getDataDetailProd = () => {
        let id = this.props.match.params.id
        Axios.get(apiUrlReal + 'product/' + id)
        .then((res) => {
            // console.log(res.data)
            if(typeof(res.data) === 'string'){
                alert(res.data)
            }else{
                this.setState({data : res.data[0]})
            }

        })
        .catch((err)=> {
            console.log(err)
        })
    }
    render() {
        if(this.state.data === null){
            return(
                <h1>Loading</h1>
                )
            }
        var {name, price, images_1, images_2, images_3, stock, category_id} = this.state.data
        return (
            <div className='container py-5'>
                <h1>{name}</h1>
                <p>{price}</p>
                <p>{images_1}</p>
                <p>{images_2}</p>
                <p>{images_3}</p>
                <p>{stock}</p>
                <p>{category_id}</p>
            </div>
        );
    }
}

export default testDetail;