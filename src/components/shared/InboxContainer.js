import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoadingPage from '../core/LoadingPage';
import InboxList from './InboxList';
import InboxDetails from './InboxDetails';

export class InboxContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="inbox_container">
                {!this.props.positions && <LoadingPage />}
                {this.props.positions &&
                    <div className="inbox_widget">
                        <InboxList positions={this.props.positions} />
                        <InboxDetails />
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    positions: state.positions
});

export default connect(mapStateToProps)(InboxContainer);


InboxContainer.propTypes = {
    positions: PropTypes.array,
};

