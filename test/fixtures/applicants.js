import user from './user';
import notes from './notes';
import { position } from './positions';


const { positionId } = position;

const applicants = [
    {
        applicantId: 'firstApplicantId',
        applicantNotes: notes,
        applicantStatus: 'APPLIED',
        positionId,
        user,
    },
    {
        applicantId: 'secondApplicantId',
        applicantNotes: notes,
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
