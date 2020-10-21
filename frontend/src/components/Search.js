import React from "react";
import TextField from "@material-ui/core/TextField";

export default function Search({search, onChange}){
    return <label>
        <TextField label="search"  value={search} onChange={event => onChange(event.target.value)}/>
        <span role="img" aria-label="search"> 🔎</span>
    </label>
}