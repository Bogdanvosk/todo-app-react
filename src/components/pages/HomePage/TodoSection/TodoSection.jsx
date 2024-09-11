import { useSelector } from 'react-redux';

import { selectTodosByFilter } from '@/store/features/todos/selectors';

import Container from '@/components/common/Container/Container';
import MainInput from '@/components/common/MainInput/Input';
import TodoItems from '@/components/common/TodoItems/TodoItems';
import Nav from '@/components/common/Nav/Nav';

import s from './TodoSection.module.scss';

const TodoSection = () => {
  const filteredTodos = useSelector(selectTodosByFilter);

  return (
    <section className={s.todo}>
      <Container>
        <Nav />
        <div className={s.inputWrapper}>
          <MainInput placeholder='What needs to be done?' />
        </div>
        <TodoItems items={filteredTodos} />
      </Container>
    </section>
  );
};

export default TodoSection;
