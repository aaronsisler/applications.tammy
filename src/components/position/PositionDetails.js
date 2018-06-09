import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class PositionDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="position_details">
                {!this.props.position &&
                    <div>
                        Please select an item to view
                    </div>
                }
                {this.props.position &&
                    <div className="position_details__content">
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

export default connect(mapStateToProps)(PositionDetails);


PositionDetails.propTypes = {
    position: PropTypes.object,
};

