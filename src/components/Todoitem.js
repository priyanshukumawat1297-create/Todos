import React, { useState } from 'react'

function Todoitem({ todo, ondelete, editTodo }) {   //destructuring 
  const [showmodal, setmodal] = useState(false);
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const editing = () => {
  setmodal(true);
  settitle(todo.title);
  setdesc(todo.desc);
}
  const submit = ()=>{
    editTodo(todo,title,desc);
    setmodal(false);
  }
  return (
    <>
      <div className="container ms-5">
        <h4 className=" ms-3">{todo.title}</h4>
        <p className=" ms-3">{todo.desc}</p>
        <button className="btn btn-sm btn-danger ms-3" onClick={() => { ondelete(todo) }}>Delete</button>
        <button className="btn btn-sm btn-danger ms-3" onClick={editing} >Edit</button>
      </div>
      {showmodal && (
        <>
          <div
            className="modal fade show"
            tabIndex="-1"
            style={{ display: "block" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">

                <div className="modal-header">
                  <h5 className="modal-title">Edit Todo</h5>

                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setmodal(false)}
                  ></button>
                </div>

                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      value={title}
                      onChange={(e) => { settitle(e.target.value) }}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="desc" className="form-label">
                      Description
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      id="desc"
                      value={desc}
                      onChange={(e) => { setdesc(e.target.value) }}
                    />
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setmodal(false)}
                  >
                    Close
                  </button>

                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={submit}
                  >
                    Edit Todo
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* Background dark overlay */}
          <div className="modal-backdrop fade show"></div>
        </>
      )}
      <hr style={{ width: "1200px", margin: "20px 70px" }} />
    </>
  )
}

export default Todoitem
