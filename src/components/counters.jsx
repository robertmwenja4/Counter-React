import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    
    render() { 
        console.log('Counters - Rendered');
        //Use object destructuring to remove this.props
        const { onDelete, onIncrement } = this.props;
        return (
            <div>
                {/* //covention way without destructuring */}
                <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.props.counters.map(
                    counter => <Counter key={counter.id} onDelete={onDelete} onIncrement={onIncrement} counter={counter} />
                ) }
            </div>
        );
    }
}
 
export default Counters;