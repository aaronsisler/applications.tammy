import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class PositionDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { position } = this.props;
        return (
            <div className="position_details">
                {!position &&
                    <div className="empty">
                        Please select an item to view
                    </div>
                }
                {position &&
                    <div className="position_details_widget">
                        <div className="position_details_header">
                            <div>
                                <div className="position_details__title">
                                    {position.title}
                                </div>
                                <div className="position_details__job_id">
                                    Job Id: {position.jobId}
                                </div>
                            </div>
                            <div className="position_details__location">
                                {position.location}
                            </div>
                        </div>
                        <div className="position_details_content">
                            <div className="position_details__description">
                                <span>Description:</span>
                                <div>{position.content.description}</div>
                            </div>
                            {position.content.responsibilities &&
                                <div className="position_details__responsibilities">
                                    <span>Responsibilities:</span>
                                    <ul className="position_details__list">
                                        {position.content.responsibilities.map((responsibility, index) =>
                                            <li key={index}>{responsibility}</li>
                                        )}
                                    </ul>
                                </div>
                            }
                            {position.content.requirements &&
                                <div className="position_details__requirements">
                                    <span>Requirements:</span>
                                    <ul className="position_details__list">
                                        {position.content.requirements.map((requirement, index) =>
                                            <li key={index}>{requirement}</li>
                                        )}
                                    </ul>
                                </div>
                            }
                        </div>
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

