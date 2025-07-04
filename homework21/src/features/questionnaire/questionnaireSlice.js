import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  questions: [
    { id: 1, text: 'Question 1?', correctAnswer: 'Option 1' },
    { id: 2, text: 'Question 2?', correctAnswer: 'Option 2' },
    { id: 3, text: 'Question 3?', correctAnswer: 'Option 1' },
    { id: 4, text: 'Question 4?', correctAnswer: 'Option 1' },
    { id: 5, text: 'Question 5?', correctAnswer: 'Option 2' },
  ],
  answers: {},         // Храним ответы пользователя
  submitted: false,    // Была ли форма отправлена
  score: 0             // Результат
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { id, answer } = action.payload;
      state.answers[id] = answer; // Сохраняем ответ
    },
    submitAnswers: (state) => {
      let score = 0;
      state.questions.forEach((q) => {
        if (state.answers[q.id] === q.correctAnswer) {
          score++;
        }
      });
      state.score = score;
      state.submitted = true;
    },
    reset: (state) => {
      state.answers = {};
      state.submitted = false;
      state.score = 0;
    }
  }
});

export const { answerQuestion, submitAnswers, reset } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
