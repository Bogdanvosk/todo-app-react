import { useSelector } from 'react-redux'

import Container from '@/components/common/Container/Container'
import MainInput from '@/components/common/MainInput/Input'
import TodoItems from '@/components/common/TodoItems/TodoItems'
import Nav from '@/components/common/Nav/Nav'

import s from './TodoSection.module.scss'

const TodoSection = () => {
	const { todos, filter } = useSelector(state => state.todos)

	const filteredTodos = () => {
		switch (filter) {
			case 'all':
				return todos
			case 'active':
				return todos.filter(item => !item.completed)
			case 'completed':
				return todos.filter(item => item.completed)

			default:
				break
		}
	}

	return (
		<section className={s.todo}>
			<Container>
				<Nav />
				<div className={s.inputWrapper}>
					<MainInput placeholder='What needs to be done?' />
				</div>
				<TodoItems items={filteredTodos()} />
			</Container>
		</section>
	)
}

export default TodoSection
