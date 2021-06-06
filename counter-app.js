import cx from 'classnames';
import { Component } from 'react';




export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 42};
        this.btnIncrement = this.btnIncrement.bind(this);
    }
    
    btnIncrement(event) {
        this.setState({value: this.state.value + 1})
    }
    render() {
        return (
            <>
                <div>
                    <h2 className="counter">{this.state.value}</h2>
                    <button className="counter-button" onClick={this.btnIncrement}>Click</button>
                </div>
                <style>{`
                    .counter-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                `}</style>
            </>
        );
    }
} 
