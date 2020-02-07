import React, { Component } from 'react';

import classes from './Modal.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log(`ShouldComponentUpdate, show = ${nextProps.show}`);
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    };

    render() {
        return(
            <Aux>
                <Backdrop
                        show={this.props.show}
                        clicked={this.props.closed} />
                <div
                    className={`modal ${classes.Modal}`}
                    style={{
                        tansform: this.props.show ? 'translateY(0)' : 'translateY(100vh)',
                        display: this.props.show ? 'block': 'none'
                    }} >
                    {this.props.children}
                </div>
            </Aux>
        );
    }
} 

export default Modal;