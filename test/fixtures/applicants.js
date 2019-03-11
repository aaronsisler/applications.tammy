import user from './user';
import userDocuments from './userDocuments';
import notes from './notes';
import { positionId } from './positions';

const applicants = [
    {
        applicantId: 'firstApplicantId',
        applicantNotes: notes,
        applicantStatus: 'APPLIED',
        positionId,
        user,
        userDocuments,
    },
    {
        applicantId: 'secondApplicantId',
        applicantNotes: notes,
        applicantStatus: 'APPLIED',
        positionId,
        user: { ...user, firstName: 'New First Name', lastName: 'New Last Name' },
        userDocuments,
    },
]

export const applicantWithNoNotes =
{
    applicantId: 'firstApplicantId',
    positionId,
    user,
    userDocuments,
}


export const defaultApplicantsState = {
    applicants
}

export const [applicant] = applicants;

export const { applicantId } = applicant;

export default applicants;
