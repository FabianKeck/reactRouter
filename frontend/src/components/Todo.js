import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export default function Todo({ id, status, description, onAdvance }) {
    return (
        <StyledTodo>
            <h3>
                {description} <small>[{status}]</small>
            </h3>
            <ButtonGroup>
                {status !== 'DONE' && onAdvance && (
                    <Button variant="contained" color="primary"
                        onClick={() => onAdvance({ id, description, status })}
                    >
                        Advance
                    </Button>
                )}
                <Link to={"/confirmdelete/" + id}><Button variant="contained" color="secondary" >Delete</Button></Link>
            </ButtonGroup>
        </StyledTodo>
    );
}

const StyledTodo = styled.section`
    padding: 8px;
    border: 1px solid salmon;
    border-radius: 8px;
`;

