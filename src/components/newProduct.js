import React, {Component} from 'react';
import axios from 'axios';

class NewProduct extends Component {
    state = {
        name: '',
        style: '',
        tank: '',
        yeast: '',
        additions: '',
        gravity: '',
        temperature: '',
        pH: '',
        brewOrBlendDate: '',
        notes: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:5000/api/products`, this.state)
        .then(response => {
            if(response) {
                this.setState()
                console.log(response)
            }
            else {
                console.log('Failed to save new product')
            }
        })
    };

    render() {
        return (
            <div></div>
        )
    }
};

export default NewProduct;