import React from "react";
import Todo from "./Todo";
import styled from "styled-components";
import {useParams, useHistory} from "react-router-dom";

export default function DeleteConfirmation({removeById}) {

    const {id} = useParams();
    const history = useHistory();

    return <div>
        <Todo/>
        Do you really want to delete this item {id}?
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