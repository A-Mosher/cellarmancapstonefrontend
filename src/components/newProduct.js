import React, {Component} from 'react';
import axios from 'axios';
import './newProduct.css';

class NewProduct extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            style: '',
            tank: '',
            yeast: '',
            additions: '',
            gravity: '',
            temperature: '',
            pH: '',
            fermStatus: '',
            notes: '',
        };
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    async handleSubmit(event){
        event.preventDefault();
        let product = {
            name: this.state.name,
            style: this.state.style,
            tank: this.state.tank,
            yeast: this.state.yeast,
            additions: this.state.additions,
            gravity: this.state.gravity,
            temperature: this.state.temperature,
            pH: this.state.pH,
            fermStatus: this.state.fermStatus,
            notes: this.state.notes,
        }
        await axios.post(`http://localhost:5000/api/products`, product)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
    
    render() {
        return (
            <div className="everything">
                <form onSubmit={(event) => this.handleSubmit(event)} className='newProduct-form'>
                <h1 className="header">New Beer</h1>
                <div className='form-inputs'>
                    <label htmlFor='name' className='form-label'>
                        Name:
                    </label>
                    <input id='name' type='text' name='name' className='form-input' placeholder='Beer name' onChange={this.handleChange} value={this.state.name} />
                </div>
                <br></br>
                <div className='form-inputs'>
                    <label htmlFor='style' className='form-label'>
                        Style:
                    </label>
                    <input id= 'style' type='text' name='style' className='form-input' placeholder='Beer style'onChange={this.handleChange} value={this.state.style}  />
                </div>
                <br></br>
                <div className='form-inputs'>
                    <label htmlFor='tank' className='form-label'>
                        Tank:
                    </label>
                    <input id= 'tank' type='text' name='tank' className='form-input' placeholder='Name of tank' onChange={this.handleChange} value={this.state.tank} />
                </div>
                <br></br>
                <div className='form-inputs'>
                    <label htmlFor='yeast' className='form-label'>
                        Yeast Pitched:
                    </label>
                    <input id= 'yeast' type='text' name='yeast' className='form-input' placeholder='Yeast pitched' onChange={this.handleChange} value={this.state.yeast} />
                </div>
                <br></br>
                <div className='form-inputs'>
                    <label htmlFor='additions' className='form-label'>
                        Additions:
                    </label>
                    <input id= 'additions' type='text' name='additions' className='form-input' placeholder='Additions added'onChange={this.handleChange} value={this.state.additions}  />
                </div>
                <br></br>
                <div className='form-inputs'>
                    <label htmlFor='gravity' className='form-label'>
                        Starting Gravity:
                    </label>
                    <input id= 'gravity' type='text' name='gravity' className='form-input' placeholder='Starting gravity' onChange={this.handleChange} value={this.state.gravity} />
                </div>
                <br></br>
                <div className='form-inputs'>
                    <label htmlFor='temperature' className='form-label'>
                        Temperature:
                    </label>
                    <input id= 'temperature' type='text' name='temperature' className='form-input' placeholder='Temperature' onChange={this.handleChange} value={this.state.temperature} />
                </div>
                <br></br>
                <div className='form-inputs'>
                    <label htmlFor='pH' className='form-label'>
                        pH:
                    </label>
                    <input id= 'pH' type='text' name='pH' className='form-input' placeholder='pH' onChange={this.handleChange} value={this.state.pH} />
                </div>
                <br></br>
                <div className='form-inputs'>
                    <label htmlFor='fermStatus' className='form-label'>
                        Fermentation Status:
                    </label>
                    <input id= 'fermStatus' type='text' name='fermStatus' className='form-input' placeholder='Fermentation Status' onChange={this.handleChange} value={this.state.fermStatus} />
                </div>
                <br></br>
                <div className='form-inputs'>
                    <label htmlFor='notes' className='form-label'>
                        Notes:
                    </label>
                    <input id= 'notes' type='text' name='notes' className='form-input' placeholder='Notes' onChange={this.handleChange} value={this.state.notes}/>
                </div>
                <br></br>
                <button className='form-input-btn' type='submit' >
                    Enter Beer
                </button>

            </form>
            </div>
        )
    }
};

export default NewProduct;