import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class InboxDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="inbox_details">
                {!this.props.position &&
                    <div>
                        Please select an item to view
                    </div>
                }
                {this.props.position &&
                    <div className="inbox_details__content">
                        {this.props.position.content}
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    position: state.position
});

export default connect(mapStateToProps)(InboxDetails);


InboxDetails.propTypes = {
    position: PropTypes.object,
};

