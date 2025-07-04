import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { submitAnswers } from './features/questionnaire/questionnaireSlice';
import Question from './components/Question/Question';
import Result from './components/Result/Result';

function App() {
  const questions = useSelector(state => state.questionnaire.questions);
  const submitted = useSelector(state => state.questionnaire.submitted);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(submitAnswers());
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Questionnaire</h1>
      {!submitted ? (
        <>
          {questions.map(q => (
            <Question key={q.id} question={q} />
          ))}
          <button onClick={handleSubmit} style={{ background: 'blue', color: 'white', padding: '10px 20px' }}>
            Submit
          </button>
        </>
      ) : (
        <Result />
      )}
    </div>
  );
}

export default App;