import React, { Component } from 'react';
import Counter from './counter';

class counters extends Component {
   
    
    state = {
        counters: [
            {id:1, value: 30},
            {id:2, value: 0},
            {id:3 , value: 0},
            {id:4, value: 0},
            {id:5, value: 0},
        ]
    }

    handleDelete = (id) =>{
        const newCounter = this.state.counters.filter(count => count.id !== id)
        this.setState({counters: newCounter})
    }
    render() {
        return (
            <div>
               {this.state.counters.map(counter => <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} countId = {counter.id}>
                   
                   <h1>Title</h1>
                   </Counter>)}
            </div>
        );
    }
}

 

export default counters;