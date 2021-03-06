import NavBar from './components/NavBar';
import Counters from './components/counters';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    }

    //It is called once in lifecycle hooks
    constructor() {
        super();
        console.log('App - Constructor');
    }

    componentDidMount() {
        //Ajax calls eg call movies from server and setState
        console.log("App - mounted");
    }

    handleIncrement = (counter) => {
        //Cloning the counters array
        const counters = [...this.state.counters];
        //Identify the index of item to be modified in the array
        const index = counters.indexOf(counter);
        //Incrementing the cloned object add ...
        counters[index] = {...counter };
        //Increment the value directly
        counters[index].value++;
        //Change the state
        this.setState({ counters });
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    }
    render() {
        console.log('App - rendered');
        return ( <
            React.Fragment >
            <
            NavBar totalCounters = { this.state.counters.filter(c => c.value > 0).length }
            / > <
            main className = "container" >
            <
            Counters counters = { this.state.counters }
            onReset = { this.handleReset }
            onIncrement = { this.handleIncrement }
            onDelete = { this.handleDelete }
            /> < /
            main > <
            /React.Fragment>
        );
    }
}

export default App;