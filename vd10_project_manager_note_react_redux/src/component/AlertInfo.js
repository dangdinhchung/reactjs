import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';

class AlertInfo extends Component {
    handleDismiss = () => {
        this.props.alertOff();
    }
    render() {
        if (this.props.isAlert === false) return null;
        return (
            //cũng có thể thay dổi vị trí
            /* AlertContainer : position="bottom-right" */
            <AlertContainer>
                <Alert type={this.props.alertType} onDismiss={() => this.handleDismiss()} timeout={1000}> 
                {this.props.alertContent}
                </Alert>
            </AlertContainer>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAlert: state.isAlert,
        alertContent: state.alertContent,
        alertType : state.alertType
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOff: () => {
            dispatch({
                type: "ALERT_OFF"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo)