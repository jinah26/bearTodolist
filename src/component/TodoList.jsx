import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import TodoItem from './TodoItem';
import TodoDetail from "./TodoDetail";
import TodoCreate from './TodoCreate';
const TodoList = () => {
    const [todos, setTodos] = useState([
        {id:1, title: '베어를 환영합니다.', content: '베어는 메모와 산문을 작성할 수 있는 아름답고, 편리한 앱입니다. 베어는 시작하기도, 마스터하기도 쉽습니다. 간단히 소개해드리겠습니다. 또한 [월간 뉴스레터 구독](http://eepurl.com/dvs38P)을 통하여 각종 팁과 인터뷰, 뉴스 및 [기타 정보](https://bear.app/faq/)를 받아보실 수 있습니다'},
        {id:2, title: '정리 및 게시.', content: '베어의 몇 가지 간단한 기능에 대해 배워보겠습니다. 처음부터 시작하고 싶으면 [[베어에 환영합니다]]로 되돌아가거나 [[동기화, 잠금, 내보내기, 테마를 지원하는 Bear Pro]] 및 [[팁과 트릭]]으로 건너뛰세요.'},
        {id:3, title: '팁과 트릭.', content: '가급적 빨리 아이디어를 메모로 전환할 수 있도록 여러 종류의 유익한 기능을 구현하였습니다. 여기서 베어 스킬을 더욱 강화해보세요. 처음부터 시작하고 싶으면 [[베어에 환영합니다]]로 이동하거나, 메모를 [[정리 및 게시]]하는 방법 및 [[동기화, 잠금, 내보내기, 테마를 지원하는 Bear Pro]]에 대해 자세히 알아보세요.'}
    ]);
    const [activeTodo, setActiveTodo] = useState({});

    

    const handleChange = (e, id) => {
        const { name, value } = e.target;
        todos[id-1][name] = value;
        setTodos([...todos]);
    };


    const handleClick = (id) => {
        todos.filter((todo) => {
            if (id === todo.id) {
                setActiveTodo(todo);
            }
        })
    };

    //제거

    const removelist = (id) => {
        setTodos(todos.filter(todo => {
          return todo.id !== id;
        }));
      };
      const addList = (todo) => {
        setTodos([
          ...todos,
          todo
        ]);
      };
   


    return (
        <>
        
        <TodoListContainer>
        <Scroll>
            <TodoListWrapper>
                {console.log(todos)}
            {Array.isArray(todos) && todos.map(todo => (
                <TodoItem id={todo.id} title={todo.title} content={todo.content} removelist={removelist} handleClick={(id) => handleClick(id)}/>
            ))}
            </TodoListWrapper>
            </Scroll>
            <TodoDetail id={activeTodo.id} title={activeTodo.title} content={activeTodo.content} removelist={activeTodo.removelist} handleChange={(e, id) => handleChange(e, id)}/>
       
            </TodoListContainer>
            <TodoCreate addList={addList} />
            
       
           
        </>
    )
};

export default TodoList;

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 1000px;
  background-color: #0A0E1A;
  border: 1px solid black;
`;

const TodoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
`;


const Scroll = styled.div`
  overflow: scroll;
  height: 1000px;
  color: yellow;
`;