import React, { useState } from 'react';

function AddTodo(props) {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        } else {
            props.addTodo(title, desc);
            settitle("");
            setdesc("");
        }
    }
    return (
        <div className="container my-3 ms-5" style={{ width: "80vh" }}>
            <h3 className='ms-5'>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3 ms-5" >
                    <label htmlFor="title" className="form-label ms-5">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { settitle(e.target.value) }} className="form-control ms-5" id="title" aria-describedby="title" />
                </div>
                <div className="mb-3 ms-5">
                    <label htmlFor="desc" className="form-label ms-5">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => { setdesc(e.target.value) }} className="form-control ms-5" id="desc" />
                </div>
                <div className="ms-5">
                    <button type="submit" className="btn btn-sm btn-success ms-5">Add Todo</button>
                </div>

            </form>
        </div>
    )
}

export default AddTodo
