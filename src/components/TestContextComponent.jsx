import React, { Component } from 'react';
import {RenderContextConsumer} from '../context';

class TestContextComponent extends Component {
    render() {
        return (
            <RenderContextConsumer>
                {context => (
                    <h1>{context}</h1>
                )}
            </RenderContextConsumer>
        )
    }
}

export default TestContextComponent;