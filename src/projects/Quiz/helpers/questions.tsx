export interface Question {
    prompt: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    answer: 'optionA' | 'optionB' | 'optionC' | 'optionD';
}

export const Questions: Question[] = [
    {
        prompt: 'What is 2 + 2',
        optionA: '4',
        optionB: '2',
        optionC: 'Too hard',
        optionD: 'There can be no answer',
        answer: 'optionA'
    },
    {
        prompt: 'Which of these is NOT a programming language?',
        optionA: 'JavaScript',
        optionB: 'C++',
        optionC: 'Java',
        optionD: 'Computer',
        answer: 'optionD'
    }, 
    {
        prompt: 'What is the answer is all life?',
        optionA: 'No one knows...',
        optionB: '42',
        optionC: 'Living is the only answer.',
        optionD: 'Ask someone else',
        answer: 'optionB'
    }
];
