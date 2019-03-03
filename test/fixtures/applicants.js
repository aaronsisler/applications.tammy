import user from './user';
import { position } from './positions';

const { positionId } = position;

const applicantNotes = [
    { noteMessage: 'First note' },
    { noteMessage: 'Second note' },
]

const applicants = [
    {
        applicantId: 'firstApplicantId',
        positionId,
        user,
        applicantNotes,
    },
    {
        applicantId: 'secondApplicantId',
        positionId,
        user: { ...user, firstName: 'New First Name', lastName: 'New Last Name' },
        applicantNotes,
    },
]

export const applicantWithNoNotes =
{
    applicantId: 'firstApplicantId',
    positionId,
    user,
}


export const defaultApplicantsState = {
    applicants
}

export default applicants;
