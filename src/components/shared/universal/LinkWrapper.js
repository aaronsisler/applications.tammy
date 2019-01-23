import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class LinkWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="link_wrapper">
                <Link
                    className="nav_link"
                    onClick={this.props.onClick}
                    to={this.props.to}
                >
                    {this.props.linkText}
                </Link>
            </div>
        );
    }
}

LinkWrapper.propTypes = {
    linkText: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    to: PropTypes.string.isRequired,
};

