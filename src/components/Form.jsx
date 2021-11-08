import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    state = {
        name: "",
        email: ""
    }

    changeHandler = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmitHandler = (e) =>{
        console.log('state', this.state);
        e.preventDefault()
    }

    componentDidMount(){
        axios.get('http://localhost:3004/posts')
        .then(res => console.log(res.data))
    }

    render() {
        return (
            <div >
                <form class="row g-3 mx-auto">

                    <div class="col-8">
                         
                        <input type="text" name="name" class="form-control" placeholder="name" value={this.state.name} 
                        onChange = {e => this.changeHandler(e)}
                        />
                    </div>
                    <div class="col-8">
                         
                        <input type="email" class="form-control" placeholder="email" value={this.state.email} 
                        onChange = {e => this.setState({
                            email: e.target.value
                        })}
                        />
                    </div>
                    <hr class="col-8" />

                    <div class="col-12">
                        <button onClick={(e)=> this.onSubmitHandler(e)} type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}



export default Form;