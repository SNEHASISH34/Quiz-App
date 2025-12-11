export interface Question {
  id: number;
  text: string;
  answers: string[];
  correct: number;
}

export const quizData: Question[] = [
  {
    id: 1,
    text: 'What sound does a cat make?',
    answers: ['Bhau-Bhau', 'Meow-Meow', 'Oink-Oink'],
    correct: 1,
  },
  {
    id: 2,
    text: 'What would you probably find in your fridge?',
    answers: ['Shoes', 'Ice Cream', 'Books'],
    correct: 1,
  },
  {
    id: 3,
    text: 'How many stars are in the sky?',
    answers: ['Two', 'Infinite', 'One Hundred'],
    correct: 1,
  },
];