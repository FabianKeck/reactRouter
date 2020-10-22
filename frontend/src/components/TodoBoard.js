import {Route, Switch} from "react-router-dom";
import DeleteConfirmation from "./DeleteConfirmation";
import React from "react";
import styled from "styled-components/dist/styled-components-macro.esm";
import TodoList from "./TodoList";

export default function ({todos, advance}){
    const statuses = ["OPEN", "IN_PROGRESS", "DONE" ]

    return <Board>
            <Switch>
                <Route  exact path={["/","/all"]}>
                    <ListAll/>
                </Route>
                <Route path={"/open"}>

                </Route>
                <Route path={"/inprogress"}>

                </Route>
                <Route path={"/done"}>

                </Route>
        </Switch>
    </Board>


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