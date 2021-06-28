import React, {useState} from 'react';
import {Button} from 'react-bootstrap'
import styled from 'styled-components';


const InsertFormPositioner = styled.div`
            width: 100%;
`;

const InsertForm = styled.form`
            background: #0A0E1A;
            padding: 30px;

            border-top: 2px solid #e9ecef;
`;

const Input = styled.input`
            padding: 12px;
            border: 1px solid #dee2e6;
            width: 100%;
            outline: none;
            font-size: 18px;
            box-sizing: border-box;
`;

const TodoCreate = ({addList}) => {
 
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

  
    const [open, setOpen] = useState(false);

    const putform = () => {
        let validated = true;
        if(!title) {
            setTitle('제목을 입력해주세요')
            validated =false;
        }

        if(!content) {
            setTitle('내용을 입력해주세요')
            validated =false;
        }

        return validated;
    }

    const Openadd = () => {
        setOpen(true);
    }


    const addSubmit = (e) => {
        e.preventDefault();
        if(putform()) {
            addList({
                title: title,
                content: content
            });
        }

    }



    return (
        <>
        <Button style={{color:'black', backgroundColor:'white', width:'100%', height:'50px'}} onClick={Openadd} open={open}>
                추가하기
            </Button>

        {open && (
                <InsertFormPositioner>
                    <InsertForm onSubmit={addSubmit}>
                        <Input 
                            type="text"
                            value={title}
                            placeholder="제목을 입력하세요"
                            onChange={e => setTitle(e.target.value)}
                            />
                            <Input 
                            type="text"
                            value={content}
                            placeholder="내용을 입력하세요"
                            onChange={e => setContent(e.target.value)}
                            />
                            <Button type="submit" style={{color:'black', backgroundColor:'white', width:'100%', height:'30px'}} >
                                저장하기</Button>
                    </InsertForm>
                </InsertFormPositioner>
            )}
           
        </>
    )
};

export default TodoCreate;



