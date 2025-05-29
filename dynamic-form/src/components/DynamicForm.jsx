import React from 'react'
import { useForm } from 'react-hook-form'
import styles  from '../styles/DynamicForm.module.css' 

const DynamicForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const firstInputValue = watch('firstInput')

  const onSubmit = (data) => {
    console.log('Отправленные данные:', data)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input className={styles.input}
          type='text'
          placeholder='Введите значение'
          {...register('firstInput', { required: 'Это поле обязательно' })}
        />
        {errors.firstInput && <p>{errors.firstInput.message}</p>}
      </div>

      {firstInputValue === 'показать' && (
        <div>
          <input
            type='text'
            placeholder='Второе поле'
            {...register('secondInput', {
              required: 'Введите второе значение'
            })}
          />
          {errors.secondInput && <p>{errors.secondInput.message}</p>}
        </div>
      )}

      <button className={styles.button} type='submit'>Отправить</button>
    </form>
  )
}

export default DynamicForm
