const content = {
    description: 'first description',
    requirements: ['Skill 1', 'Skill 2'],
    responsibilities: ['Responsibility 1', 'Responsibility 2']
}

export default [
    {
        content,
        jobId: 'first job id',
        location: 'first location',
        positionId: 'firstPositionId',
        title: 'first title',
    },
    {
        content: {
            ...content,
            description: 'second description'
        },
        jobId: 'second job id',
        location: 'second location',
        positionId: 'secondPositionId',
        title: 'second title',
    }
]
