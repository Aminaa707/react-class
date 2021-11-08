import React, { Component } from "react";
import '../App.css';

class Counter extends Component {
  
    state = {
        count: this.props.value,
        tags: ['tag1', 'tag2', 'tag3'],
        imgUrl: 'https://static.remove.bg/remove-bg-web/f50bd6ad4990ff621deccea155ab762c39d8c77a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png'
    }

    styles = {
        fontSize: 30,
    }
    GetClass() {
        let classes = "mx-3 text-white  p-2 bg-"
        classes += this.state.count === 0 ? "danger" : "primary"
        return classes
    }

    Change() {
        return this.state.count === 0 ? "Zero" : this.state.count
    }

    RanderTags() {

        if (this.state.tags.length === 0) return <p>There are no tags</p>;
        return <ul >
            {this.state.tags.map(tag => <li  key={tag}> {tag}</li>)}
        </ul>
    }

    handleIncrement= () => {
        console.log('increment', this);
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log("props",this.props);
        return (
            <div className="App">
                <img src={this.state.imgUrl} alt="" />
                <div className="mt-5">
                    
                    {/* this is the children tags means this writen in another Component */}
                  <div className='mb-3'>
                  {this.props.children} Id : {this.props.countId}
                  </div>


                    <span className={this.GetClass()}>{this.Change()}</span>
                    <button type="button" class="btn btn-warning" onClick={this.handleIncrement}>Increment</button>

                    <button type="button" class="btn btn-danger" onClick={()=> this.props.onDelete(this.props.countId)}>Delete</button> 

                    {/* {this.RanderTags()} */}

                    {this.state.tags.length === 0 ? "There are no tags" : <ul>
                        {this.state.tags.map(tag => <li key={tag}> {tag}</li>)}
                    </ul>}
                </div>
            </div>
        )
    }



}

export default Counter;