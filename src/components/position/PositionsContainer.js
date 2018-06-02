import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PositionListItem from './PositionListItem';
import selectPositions from '../../selectors/position';


export class PositionsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="positions_page">
                <div className="positions_list_header">
                    <div className="show_for_mobile">Positions</div>
                    <div className="show_for_desktop">Position</div>
                    <div className="show_for_desktop">Job Id</div>
                </div>
                <div className="positions_list_body">
                    {
                        this.props.positions.length === 0 ? (
                            <div className="list_item list_item_message">
                                <span>No positions</span>
                            </div>
                        ) : (
                                this.props.positions.map((position) => <PositionListItem key={position.id} {...position} />)
                            )
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    expenses: selectPositions(state.positions, state.filters)
});

export default connect(mapStateToProps)(PositionsContainer);

PositionsContainer.propTypes = {
    positions: PropTypes.object.isRequired,
};

