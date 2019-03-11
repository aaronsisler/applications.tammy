import React from 'react';
import { shallow } from 'enzyme';
import { ApplicantProcessContainer } from 'Applicant/ApplicantProcessContainer';
import { applicant, applicantId, applicantWithNoNotes } from '../../fixtures/applicants';

describe('ApplicantProcessContainer', () => {
    let wrapper;
    const { positionId } = applicant;
    let startAddApplicantNote;
    let startSetApplicantStatus;
    const noteMessage = 'New note message';
    const defaultState = {
        applicantNotes: applicant.applicantNotes,
        applicantStatus: applicant.applicantStatus,
        isNotePopulated: false,
        isStatusChanged: false,
        noteMessage: '',
        prevApplicantStatus: applicant.applicantStatus,
    };

    const buildWrapper = (applicantInput = applicant) => {
        startAddApplicantNote = jest.fn();
        startSetApplicantStatus = jest.fn();

        wrapper = shallow(
            <ApplicantProcessContainer
                applicant={applicantInput}
                startAddApplicantNote={startAddApplicantNote}
                startSetApplicantStatus={startSetApplicantStatus}
            />
        );
    };

    describe('when status is changed', () => {
        describe('when status is the same as initial status', () => {
            it('should set state correctly', () => {
                const event = { target: { value: 'APPLIED' } };

                buildWrapper();

                wrapper.find('select').simulate('change', event);

                expect(wrapper.state()).toEqual(defaultState);
            });
        });

        describe('when status is NOT the same as initial status', () => {
            it('should set state correctly', () => {
                const event = { target: { value: 'ONSITE' } };

                buildWrapper();

                wrapper.find('select').simulate('change', event);

                expect(wrapper.state()).toEqual({
                    ...defaultState,
                    applicantStatus: 'ONSITE',
                    isStatusChanged: true
                });
            });
        });
    });

    describe('when note is changed', () => {
        describe('when status has been changed', () => {
            beforeEach(() => {
                buildWrapper();
                wrapper.setState({ isStatusChanged: true });
            });

            describe('when note is populated', () => {
                it('should set state correctly', () => {
                    const event = { target: { value: noteMessage } };

                    wrapper.find('textarea').at(0).simulate('change', event);

                    expect(wrapper.state()).toEqual({
                        ...defaultState,
                        isNotePopulated: true,
                        isStatusChanged: true,
                        noteMessage,
                    });
                });
            });

            describe('when note is NOT populated', () => {
                it('should set state correctly', () => {
                    const event = { target: { value: '' } };

                    wrapper.find('textarea').at(0).simulate('change', event);

                    expect(wrapper.state()).toEqual({
                        ...defaultState,
                        isNotePopulated: false,
                        isStatusChanged: true,
                        noteMessage: '',
                    });
                });
            });
        });

        describe('when status has NOT been changed', () => {
            it('should set state correctly', () => {
                const event = { target: { value: noteMessage } };

                buildWrapper();

                wrapper.find('textarea').at(0).simulate('change', event);

                expect(wrapper.state()).toEqual(defaultState);
            });
        });
    });

    describe('when clicking submit status change button', () => {
        describe('when required fields are populated', () => {
            beforeEach(() => {
                buildWrapper();
                wrapper.setState({
                    applicantStatus: 'ONSITE',
                    isNotePopulated: true,
                    isStatusChanged: true,
                    noteMessage
                });
            });

            it('should be NOT disabled', () => {
                expect(wrapper.find('button').props().disabled).toEqual(false);
            });

            it('should call startAddApplicantNote with correct parameters', () => {
                wrapper.find('button').simulate('click');

                expect(startAddApplicantNote).toHaveBeenLastCalledWith({
                    applicantId,
                    positionId,
                    noteMessage,
                });
            });

            it('should call startSetApplicantStatus with correct parameters', () => {
                wrapper.find('button').simulate('click');

                expect(startSetApplicantStatus).toHaveBeenLastCalledWith({
                    applicantId,
                    applicantStatus: 'ONSITE',
                    positionId,
                });
            });

            it('should set the state correctly', () => {
                wrapper.find('button').simulate('click');

                expect(wrapper.state()).toEqual({
                    applicantNotes: [{ noteMessage }, ...applicant.applicantNotes],
                    applicantStatus: 'ONSITE',
                    isNotePopulated: false,
                    isStatusChanged: false,
                    noteMessage: '',
                    prevApplicantStatus: 'ONSITE'
                });
            });
        });

        describe('when required fields are NOT populated', () => {
            beforeEach(() => {
                buildWrapper();
            });

            it('should be disabled', () => {
                expect(wrapper.find('button').props().disabled).toEqual(true);
            });

            it('should NOT call startAddApplicantNote', () => {
                wrapper.find('button').simulate('click');

                expect(startAddApplicantNote).not.toHaveBeenCalled();
            });

            it('should NOT call startSetApplicantStatus', () => {
                wrapper.find('button').simulate('click');

                expect(startSetApplicantStatus).not.toHaveBeenCalled();
            });

            it('should NOT update the state', () => {
                wrapper.find('button').simulate('click');

                expect(wrapper.state()).toEqual({
                    applicantNotes: applicant.applicantNotes,
                    applicantStatus: 'APPLIED',
                    isNotePopulated: false,
                    isStatusChanged: false,
                    noteMessage: '',
                    prevApplicantStatus: 'APPLIED'
                });
            });
        });
    });

    describe('when applicant does have applicantNotes', () => {
        it('should render correctly', () => {
            buildWrapper();

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('when applicant does NOT have applicantNotes', () => {
        it('should render correctly', () => {
            buildWrapper(applicantWithNoNotes);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('when constructing', () => {
        it('should set state correctly', () => {
            buildWrapper();

            const { isNotePopulated, isStatusChanged, noteMessage: stateNoteMessage } = wrapper.state();

            expect(isNotePopulated).toEqual(false);
            expect(isStatusChanged).toEqual(false);
            expect(stateNoteMessage).toEqual('');
        });
    });

    describe('when applicant props change', () => {
        beforeEach(() => {
            buildWrapper();
            wrapper.setState({
                applicantStatus: 'ONSITE',
                isNotePopulated: true,
                isStatusChanged: true,
                noteMessage
            });
        });

        describe('when applicantId is the same', () => {
            beforeEach(() => {
                wrapper.setProps({
                    applicant: {
                        applicantId,
                        applicantStatus: 'SOMETHING NEW',
                    }
                });
            });

            it('should NOT update the state', () => {
                expect(wrapper.state()).toEqual({
                    ...defaultState,
                    applicantStatus: 'ONSITE',
                    isNotePopulated: true,
                    isStatusChanged: true,
                    noteMessage
                });
            });
        });

        describe('when applicantId is NOT the same', () => {
            const newApplicantStatus = 'HR SCREEN';
            const newApplicantNotes = [{ noteMessage: 'New message' }];

            beforeEach(() => {
                wrapper.setProps({
                    applicant: {
                        applicantId: 'Not Original Id',
                        applicantStatus: newApplicantStatus,
                        applicantNotes: newApplicantNotes,
                    }
                });
            });

            it('should update the state', () => {
                expect(wrapper.state()).toEqual({
                    applicantNotes: newApplicantNotes,
                    applicantStatus: newApplicantStatus,
                    isNotePopulated: false,
                    isStatusChanged: false,
                    noteMessage: '',
                    prevApplicantStatus: newApplicantStatus,
                });
            });
        });
    });
});
