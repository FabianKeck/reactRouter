import React from 'react';
import styled from 'styled-components/macro';
import TodoList from './components/TodoList';
import useTodos from './hooks/useTodos';
import AddTodo from './components/AddTodo';
import Search from "./components/Search";
import useSearch from "./hooks/useSearch";
import NavBar from "./components/NavBar";
import {Switch, Route} from "react-router-dom";
import DeleteConfirmation from "./components/DeleteConfirmation";


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
            <Board> <Switch>
                <Route  exact path={["/","/all"]}>
                    <ListAll/>
                </Route>
                <Route path={"/open"}>
                    <ListOpen/>
                </Route>
                <Route path={"/inprogress"}>
                    <ListInProgress/>
                </Route>
                <Route path={"/done"}>
                    <ListDone/>
                </Route>
                <Route path={"/confirmdelete/:id"}>
                    <DeleteConfirmation removeById={remove} todos={todos}/>
                </Route>
            </Switch>
            </Board>


        </Main>
    );

    function ListOpen(){
        return  <TodoList
            status="OPEN"
            todos={filteredTodos}
            onAdvance={advance}
        />
    }
    function ListInProgress(){
        return  <TodoList
            status="IN_PROGRESS"
            todos={filteredTodos}
            onAdvance={advance}
        />
    }
    function ListDone(){
        return  <TodoList
            status="DONE"
            todos={filteredTodos}
            onAdvance={advance}
        />
    }




    function ListAll(){
        return(<>
            <ListOpen/>
            <ListInProgress/>
            <ListDone/>
            </>)

    }
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

const Board = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
`;
