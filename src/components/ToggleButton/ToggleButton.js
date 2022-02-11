import React, { Component } from 'react';

class ToggleButton extends Component {
    state = {
        isShow: true,
    };
    toggle = () => {
        this.setState((prevState) => {
            return { isShow: !prevState.isShow }
        });
    };
    
    render() {
        console.log(this.state);
        return (
            <div>
                <button onClick={this.toggle}>ON</button>
                <h2>{this.state.isShow ? 'vidno' : 'nevidno'}</h2>
                
            </div>
            )
    }
}


export default ToggleButton;