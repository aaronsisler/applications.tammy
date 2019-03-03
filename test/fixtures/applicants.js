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
        applicantNotes,
        applicantStatus: 'APPLIED',
        positionId,
        user,
    },
    {
        applicantId: 'secondApplicantId',
        applicantNotes,
        applicantStatus: 'APPLIED',
        positionId,
        user: { ...user, firstName: 'New First Name', lastName: 'New Last Name' },
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

export const [{ applicantId }] = applicants;

export default applicants;
