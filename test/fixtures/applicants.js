import user from './user';
import { position } from './positions';

const { positionId } = position;

const applicantNotes = [
    { statusNote: 'First note' },
    { statusNote: 'Second note' }
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
        user,
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
