import React from 'react';

const Context = React.createContext();

export  class ContextProvider extends React.Component {

    state = {
        refresh: false
    }

    render() {
        return (
            <Context.Provider value={{
                state: this.state,
                changeState: () => {this.setState({ refresh: true })}                
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const ContextConsumer = Context.Consumer; 