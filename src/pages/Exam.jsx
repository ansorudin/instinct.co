import React, { Component } from 'react';
import { Exam2 } from './Exam2';

class Exam extends Component {

    state = { name : 'David Rodrigo'}

    changeName = () => this.state.name = 'Pablo'

    handleCount = () => {
        this.setState({ count : this.state.count + 1})
        this.setState({ count : this.state.count + 2})
        this.setState({ count : this.state.count + 3})
        this.setState({ count : this.state.count + 4})
        this.setState(prev => ({count : prev.count + 5}))
        }

    render() {
        this.changeName()
            return (
            <Exam2  />
        )
    }
}

export default Exam;
