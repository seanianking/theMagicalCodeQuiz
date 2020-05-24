import React from 'react'

function List() {
    return (
        <div>
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className="list-group-item" key={item.id}> {item.name}{" "}
                        <button className="btn btn-danger ml-5" onClick={() => dispatch({ type: "remove", index })}> X Remove </button> 
                    </li>))} 
            </ul> 
        </div >)
}

export default List;