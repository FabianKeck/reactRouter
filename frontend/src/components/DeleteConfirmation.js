import React from "react";
import Todo from "./Todo";
import styled from "styled-components";
import {useParams, useHistory} from "react-router-dom";

export default function DeleteConfirmation({removeById, todos}) {

    const {id} = useParams();
    const history = useHistory();

    const findTodoById = (todos , id) => {
        return todos.find(todo => todo.id === id)
    }

    return <div>
        {JSON.stringify(findTodoById(todos,id))}
        Do you really want to delete this item with {id}?
        <ButtonGroup>
            <button onClick={() => history.goBack()}>Cancel</button>
            <button onClick={() => {
                removeById(id);
                history.goBack();
            }}>Delete</button>
        </ButtonGroup>
    </div>;
}

const ButtonGroup = styled.section`
    display: flex;
    justify-content: space-between;
`;