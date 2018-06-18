import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DocumentSelectionList from './DocumentSelectionList';

export class DocumentSelectionContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="document_selection_container">
                <DocumentSelectionList documents={this.props.userDocuments} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userDocuments: state.userDocuments,
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(DocumentSelectionContainer);

DocumentSelectionContainer.propTypes = {
    userDocuments: PropTypes.array.isRequired,
};
