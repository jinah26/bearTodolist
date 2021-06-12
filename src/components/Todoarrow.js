import React, { useState } from 'react';
import { useTodoState,  useTodoDispatch, useTodoNextId } from '../TodoContext';
import { MdPlayArrow } from 'react-icons/md';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    
    float : left;
    text-align: center;

    position: relative;
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0 , 0.04);

    margin: 0 auto;
    margin-top: 500px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
`;

const CircleButton = styled.button`
    float : left;
    background: #38d9a9;
    &:hover {
        background: #63e6be;
    }
    &:active {
        background: #20c997;
    }

    z-index: 5;
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: block;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;

    transition: 0.125s all ease-in;`

function arrow(id) {
    // const [value, setValue] = useState('');
    
    //     //왼쪽에 있는 list들 제거
    //     const dispatch = useTodoDispatch();
    //     const onToggle =() => {
    //     dispatch({type: 'TOGGLE', id});
    //     }

    //     const onRemove = () => {
    //     dispatch({type:'REMOVE', id});
    //     }

    //     //onclick 오른쪽으로 list 추가

    //     const onChange = e => {
    //         setValue(e.target.value);
    //     }
    

    return(
        <TodoTemplateBlock>
            
        <CircleButton
        //  onClick={onToggle}
        //  onChange={onChange}
        >
             <MdPlayArrow />
        </CircleButton>
        
        </TodoTemplateBlock>   
    );
};

export default arrow;