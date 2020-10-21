import React from "react";
import styled from "styled-components";
import {useParams, useHistory} from "react-router-dom";
import Button from "@material-ui/core/Button";

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
            <Button variant="contained" color="primary" onClick={() => history.goBack()}>Cancel</Button>
            <Button variant="contained" color="secondary" onClick={() => {
                removeById(id);
                history.goBack();
            }}>Delete</Button>
        </ButtonGroup>
    </div>;
}

const ButtonGroup = styled.section`
    display: flex;
    justify-content: space-between;
`;