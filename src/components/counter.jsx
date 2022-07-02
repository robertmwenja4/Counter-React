import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.value
        /* tags: [] */
    };

    //Use it to bind event handler but you can also use Arrow function
    /* constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    } */
    
    //Custom Styling using js object then call using this keyword
    // style = {
    //     fontSize: 10,//jsx converts this to "10px"
    //     fontWeight: 'bold'
    // }
    /* returnEvaluate(){
        if (this.state.tags.length === 0) return <p>There is no Tags</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    } */
    handleIncrement = ()=>{
        // console.log(product);
        this.setState({ value: this.state.value + 1 });
    }
    render() { 
        console.log(this.props)
        return (
            <div className="mt-2">
            {/* style={this.style}
            style={{ fontSize: 30 }} */}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            {/* Here we raise an event which will be handled in the Counters Component */}
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            {/* //Using truthy and falsy */}
            {/* {this.state.tags.length === 0 && "Create new tags!"} 
            {this.returnEvaluate()} */}
            </div>
        );
    }
    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount(){
        const { value } = this.state;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;