import React from 'react'

function Form() {
    return (
        <div>
            <form className="form-group mt-5" onSubmit={handleSubmit}>
                <input className="form-control" ref={inputRef} placeholder="Start typing what you need to do..." />
                <button className="btn btn-success mt-3 mb-5" type="submit">Add to List</button>
            </form>
        </div>
    )
}

export default Form;