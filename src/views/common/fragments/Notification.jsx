import React, { Component } from "react";
import { NotificationManager } from 'react-notifications';
import { connect } from "react-redux";
class Notification extends Component {
    componentDidMount() {
        this.createNotification(this.props.notification.type, this.props.notification.message, this.props.notification.title)
    }
    componentWillReceiveProps() {
        this.createNotification(this.props.notification.type, this.props.notification.message, this.props.notification.title)
    }
    createNotification = (type, message, title) => {
        switch (type) {
            case 'info':
                NotificationManager.info(message, title, 1000, null, true);
                break;
            case 'success':
                NotificationManager.success(message, title, 1000, null, true);
                break;
            case 'warning':
                NotificationManager.warning(message, title, 1000, null, true);
                break;
            default:
                NotificationManager.error(message, title, 2000, null, true);
                break;
        }
    };
    render() {
        return (
            <></>
        )
    };
}
const mapStateToProps = state => ({
    notification: state.notification,
});

export default connect(
    mapStateToProps
)(Notification);
