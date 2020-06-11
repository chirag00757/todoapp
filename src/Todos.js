import React from 'react';

const Todos = ({todos,deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content}</span>
                    <span className="deleteButton" onClick={() => {deleteTodo(todo.id)}}><i class="fa fa-trash" aria-hidden="true"></i></span>
                </div>
            )
        })
    ) : (
        <p className="center"> You have no todo's left, yEHHHH </p>
    )
    return (
        <div className="todos collection">
            {todoList}
        </div>


    )
}

export default Todos;