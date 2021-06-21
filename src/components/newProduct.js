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

    async handleSubmit(event){
        event.preventDefault();
        await axios.post(`http://localhost:5000/api/products`, this.state)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
    
    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)} className='newProduct-form'>
                <h1>New Beer</h1>
                <div className='form-inputs'>
                    <label htmlFor='name' className='form-label'>
                        Name
                    </label>
                    <input id='name' type='text' name='name' className='form-input' placeholder='Beer name' onChange={this.handleChange} value={this.state.name} />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='style' className='form-label'>
                        Style
                    </label>
                    <input id= 'style' type='text' name='style' className='form-input' placeholder='Beer style'onChange={this.handleChange} value={this.state.style}  />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='tank' className='form-label'>
                        Tank
                    </label>
                    <input id= 'tank' type='text' name='tank' className='form-input' placeholder='Name of tank' onChange={this.handleChange} value={this.state.tank} />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='yeast' className='form-label'>
                        Yeast Pitched
                    </label>
                    <input id= 'yeast' type='text' name='yeast' className='form-input' placeholder='Yeast pitched' onChange={this.handleChange} value={this.state.yeast} />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='additions' className='form-label'>
                        Additions
                    </label>
                    <input id= 'additions' type='text' name='additions' className='form-input' placeholder='Additions added'onChange={this.handleChange} value={this.state.additions}  />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='gravity' className='form-label'>
                        Starting Gravity
                    </label>
                    <input id= 'gravity' type='text' name='gravity' className='form-input' placeholder='Starting gravity' onChange={this.handleChange} value={this.state.gravity} />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='temperature' className='form-label'>
                        Temperature
                    </label>
                    <input id= 'temperature' type='text' name='temperature' className='form-input' placeholder='Temperature' onChange={this.handleChange} value={this.state.temperature} />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='pH' className='form-label'>
                        pH
                    </label>
                    <input id= 'pH' type='text' name='pH' className='form-input' placeholder='pH' onChange={this.handleChange} value={this.state.pH} />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='notes' className='form-label'>
                        Notes
                    </label>
                    <input id= 'Notes' type='text' name='notes' className='form-input' placeholder='Notes' onChange={this.handleChange} value={this.state.notes}/>
                </div>
                <button className='form-input-btn' type='submit' >
                    Enter Beer
                </button>

            </form>
            </div>
        )
    }
};

export default NewProduct;