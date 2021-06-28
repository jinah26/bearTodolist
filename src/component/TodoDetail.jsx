import React from 'react';
import styled from 'styled-components';

const TodoDetail = ({id, content, title, handleChange}) => {
    return (
        <div>
            <Titleblock>
            <input style={{backgroundColor:'#0A0E1D',border:'none', color:'#F66B08', fontSize:'20px', width:'500px',textAlign:'center'}} 
            name="title" onChange={(e) => handleChange(e, id)} value={title}/>
            </Titleblock>
            <Textblock>
            <textarea style={{backgroundColor:'#0A0E1D',border:'none', color:'#eee', fontSize:'15px', width:'500px', height:'920px'}} name="content" onChange={(e) => handleChange(e, id)} value={content}/>
            </Textblock>
        </div>
    )
};


const Titleblock = styled.p`
    width: 70%;
`
const Textblock = styled.p`
    width: 70%;

`


export default TodoDetail;