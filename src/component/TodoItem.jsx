import React from 'react';
import styled from 'styled-components';


const TodoItem = ({id, title, content,removelist, handleClick}) => {
    return (
    
        <TodoItemWrapper onClick={() => handleClick(id)}>
            <Title>{title}</Title>
            <Content>{content}</Content>
            <remove>
                <button style={{margin:'50px 0 0 0'}} onClick={() => removelist(id)}>
                    삭제
                </button>
            </remove>
        
        </TodoItemWrapper>

     
    )
};

export default TodoItem



const TodoItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100px;
    width: 250px;
    height: 150px;
    background-color: #0A0E1D;
    border-bottom: 2px solid black;
`;

const Title = styled.h1`
    font-size: 15px;
    font-weight: 600;
    color: #F66B08;
`;

const Content = styled.div`
    font-size: 13px;
    font-weight: 400;
    color: white;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    word-wrap:break-word;
`;