import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
}));

export default function Todo({ id, status, description, onAdvance}) {
    const classes = useStyles();
    return (
        <Paper elevation={3}>
            <h3>{description}</h3>
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
        </Paper>
    );
}

const StyledTodo = styled.section`
    padding: 8px;
    border: 1px solid salmon;
    border-radius: 8px;
`;

