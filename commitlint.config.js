module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'scope-empty': [2, 'never'],
        'type-enum': [
            2,
            'always',
            ['feat', 'fix', 'refactor', 'chore', 'docs', 'style', 'test', 'perf'],
        ],
        'subject-case': [0],
        'subject-empty': [2, 'never'],
        'problem-rule': [2, 'always'],
        'solution-rule': [2, 'always'],
        'testing-rule': [2, 'always'],
    },
    plugins: [
        {
            rules: {
                'problem-rule': ({ body }) => {
                    const problemMatch = body != null && body.match(/Problem:\s*(.*)/);
                    return [
                        problemMatch && problemMatch[1].trim().length >= 5,
                        'Your "Problem:" section should contain at least 5 characters',
                    ];
                },
                'solution-rule': ({ body }) => {
                    return [
                        body != null && body.includes('Solution:'),
                        'Your body should contain "Solution:" message',
                        body,
                    ];
                },
                'testing-rule': ({ body }) => {
                    return [
                        body != null && body.includes('Testing:'),
                        'Your body should contain "Testing:" message',
                        body,
                    ];
                },
            },
        },
    ],
};
