import React from 'react'

export default function TodoForm() {
    return (
        <div>
            <form>
                <input type="text" placeholder="Add Todo"></input>
                <button type="submit">Add</button>
                <button type="submit">Clear Completed</button>
            </form>
        </div>
    )
}
