import React, { Component } from 'react';
import {ContextConsumer} from '../context';

class TestContextComponent extends Component {
    render() {
        return (
            <ContextConsumer>
                {context => (
                    <h1>{context}</h1>
                )}
            </ContextConsumer>
        )
    }
}

export default TestContextComponent;