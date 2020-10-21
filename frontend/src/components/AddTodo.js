import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components"

export default function AddTodo({ onAdd }) {
    const [description, setDescription] = useState('');

    return (
        <StyledForm onSubmit={handleSubmit}>
                <TextField
                    label="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            <Button type="submit" variant="contained" color="red" >New Todo</Button>
        </StyledForm>
    );

    function handleSubmit(event) {
        event.preventDefault();
        onAdd(description);
        setDescription('');
    }
}

const StyledForm = styled.form`
display: flex;
align-content: center;
justify-content: space-between;
`
