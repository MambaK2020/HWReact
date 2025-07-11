import styles from './Quote.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomQuote } from '../features/quote/quoteSlice';

function Quote() {
  const dispatch = useDispatch();
  const { quote, author, status, error } = useSelector((state) => state.quote);

  useEffect(() => {
    dispatch(fetchRandomQuote());
  }, [dispatch]);

  const handleNewQuote = () => {
    dispatch(fetchRandomQuote());
  };

  return (
    <div className={styles.container}>
      {status === 'loading' && <p className={styles.loading}>Загрузка...</p>}
      {status === 'failed' && <p className={styles.error}>Ошибка: {error}</p>}
      {status === 'succeeded' && (
        <>
          <blockquote className={styles.blockquote}>"{quote}"</blockquote>
          <p className={styles.author}>— {author}</p>
        </>
      )}
      <button className={styles.button} onClick={handleNewQuote}>
        Новая цитата
      </button>
    </div>
  );
}

export default Quote;

  