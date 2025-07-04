import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { answerQuestion } from '../../features/questionnaire/questionnaireSlice';

const Question = ({ question }) => {
  const dispatch = useDispatch();
  const selected = useSelector(state => state.questionnaire.answers[question.id]);

  const handleChange = (e) => {
    dispatch(answerQuestion({ id: question.id, answer: e.target.value }));
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <h4>{question.text}</h4>
      <label>
        <input
          type="radio"
          value="Option 1"
          checked={selected === 'Option 1'}
          onChange={handleChange}
        />
        Option 1
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Option 2"
          checked={selected === 'Option 2'}
          onChange={handleChange}
        />
        Option 2
      </label>
    </div>
  );
};

export default Question;
