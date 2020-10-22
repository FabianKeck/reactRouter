import React from 'react';
import styled from 'styled-components/macro';
import useTodos from './hooks/useTodos';
import AddTodo from './components/AddTodo';
import Search from "./components/Search";
import useSearch from "./hooks/useSearch";
import NavBar from "./components/NavBar";
import {Switch, Route} from "react-router-dom";
import DeleteConfirmation from "./components/DeleteConfirmation";
import TodoBoard from "./components/TodoBoard";


export default function App() {
    const [todos, create, remove, advance] = useTodos();
    const [search, setSearch, filteredTodos] = useSearch(todos);

    return (
        <Main>
            <Header>
                <h1>Super Kanban Board </h1>
                <NavBar/>
                <AddTodo onAdd={create} />
                <Search search={search} onChange={setSearch}/>
            </Header>

             <Switch>
                <Route path={"/confirmdelete/:id"}>
                    <DeleteConfirmation removeById={remove} todos={todos}/>
                </Route>
                 <Route>
                     <TodoBoard todos={filteredTodos} advance={advance}/>
                 </Route>
            </Switch>

        </Main>
    );


}



const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

const Main = styled.main`
    height: 100vh;
    padding: 8px;

    h1 {
        color: hotpink;
    }
`;
