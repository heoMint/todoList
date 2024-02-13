import styled from 'styled-components';
import { useTodoState } from '../context/TodoContext';

export default function TodoHead() {
    const todos = useTodoState();
    const undoneTasks = todos.filter((todo) => !todo.done);

    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        month: 'long',
        year: 'numeric',
        day: 'numeric',
    });
    
    function getTodayLabel() {
        const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
        const today = new Date().getDay();
        const todayLabel = week[today];
        return todayLabel;
    }

    return (
        <TodoHeaderWrapper>
            <h1>{dateString}</h1>
            <div className="day">{getTodayLabel()}</div>
            <div className="tasks">할일 {undoneTasks.length} 남음</div>
        </TodoHeaderWrapper>
    );
}

const TodoHeaderWrapper = styled.div`
    text-align: left;
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }
    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .tasks {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: light;
    }
`;
