import React, { Component } from 'react';

class Test extends Component {
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps cua test.js : ' + nextProps.trangthai);
        
        
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate cua test.js');
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate cua test.js');
        
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate cua test.js');
    }
    
    
    
    
    render() {
        console.log('render cua test.js');
        return (
            <div>
                <h1>{this.props.trangthai}</h1>
            </div>
        );
    }
}

export default Test;