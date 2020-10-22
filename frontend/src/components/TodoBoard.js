import {Route, Switch} from "react-router-dom";
import React from "react";
import styled from "styled-components/macro";
import TodoList from "./TodoList";

export default function ({todos, advance}){
    const statuses = ["OPEN", "IN_PROGRESS", "DONE" ]

    return <Board>
            <Switch>
                <Route  exact path={["/","/all"]}>
                    <ListAll/>
                </Route>

                {statuses.map(status =><Route path={statusToUrlFragment(status)}>
                    <TodoList status={status} todos={todos} onAdvance={advance}/>
                </Route>)}
        </Switch>
    </Board>

    function statusToUrlFragment(status){
        return "/"+status.toLowerCase().replace("_","")
    }


    function ListAll(){
        return(
            statuses.map(status => <TodoList status={status} todos={todos} onAdvance={advance}/>

            )
        )
    }

}

const Board = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
`;