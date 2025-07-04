import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {reset} from '../../features/questionnaire/questionnaireSlice'

const Result = () => {
  const score = useSelector(state => state.questionnaire.score);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Your Score: {score}</h2>
      <button onClick={() => dispatch(reset())}>Try Again</button>
    </div>
  );
};

export default Result;
