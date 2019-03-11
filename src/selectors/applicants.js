// Get filtered applicants
export default (applicants = [], { text = '' }) => applicants
    .filter((applicant) => {
        const lastNameMatch = applicant.user.lastName.toLowerCase().includes(text.toLowerCase());
        const firstNameMatch = applicant.user.firstName.toLowerCase().includes(text.toLowerCase());
        return lastNameMatch || firstNameMatch;
    })
