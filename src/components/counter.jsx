import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: []
    };
    //Custom Styling using js object then call using this keyword
    style = {
        fontSize: 10,//jsx converts this to "10px"
        fontWeight: 'bold'
    }
    /* returnEvaluate(){
        if (this.state.tags.length === 0) return <p>There is no Tags</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    } */
    handleIncrement(){
        console.log("Increment by 1");
    }
    render() { 
        
        return (
            <div className="mt-5">
            {/* style={this.style}
            style={{ fontSize: 30 }} */}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            {/* //Using truthy and falsy */}
            {/* {this.state.tags.length === 0 && "Create new tags!"} 
            {this.returnEvaluate()} */}
            </div>
        );
    }
    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount(){
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;