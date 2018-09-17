import React from 'react';
import PropTypes from 'prop-types';

export default class PositionDetailsContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { position } = this.props;
        return (
            <div className="position_details_content">
                <div className="position_details_content__description">
                    <span>Description:</span>
                    <div>{position.content.description}</div>
                </div>
                {position.content.responsibilities &&
                    <div className="position_details_content__responsibilities">
                        <span>Responsibilities:</span>
                        <ul className="position_details_content__list">
                            {position.content.responsibilities.map((responsibility, index) =>
                                <li key={index}>{responsibility}</li>
                            )}
                        </ul>
                    </div>
                }
                {position.content.requirements &&
                    <div className="position_details_content__requirements">
                        <span>Requirements:</span>
                        <ul className="position_details_content__list">
                            {position.content.requirements.map((requirement, index) =>
                                <li key={index}>{requirement}</li>
                            )}
                        </ul>
                    </div>
                }
            </div>
        );
    }
}

PositionDetailsContent.propTypes = {
    position: PropTypes.object.isRequired,
};

