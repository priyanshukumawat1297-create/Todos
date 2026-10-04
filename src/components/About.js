import React from 'react'

function About() {
    let mstyle = {
        minHeight: "78vh",
        margin: "40px auto",
        width:"80vw"
    }

    return (
        <div className='container' style={mstyle}>
            <div className="accordion" id="accordionExample">

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            What is Todo Application?
                        </button>
                    </h2>

                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Todo Application</strong> is a simple task management
                            application that helps users organize their daily activities.
                            Users can add different tasks and keep track of the work they
                            need to complete. It provides a simple and clean way to manage
                            everyday tasks efficiently.
                        </div>
                    </div>
                </div>


                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo">
                            Features of Todo Application
                        </button>
                    </h2>

                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This application allows users to <strong>add new todos</strong>
                            with a title and description. Users can also view all their
                            added tasks and delete a task when it is completed or no longer
                            required. The application provides a simple interface for
                            managing tasks.
                        </div>
                    </div>
                </div>


                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree">
                            Technologies Used
                        </button>
                    </h2>

                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This project is developed using <strong>React.js</strong>
                            for building the user interface and managing application
                            components. <strong>Bootstrap</strong> is used to make the
                            application responsive and attractive. React Router is also
                            used to navigate between different pages of the application.
                        </div>
                    </div>
                </div>


                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour">
                            Purpose of this Project
                        </button>
                    </h2>

                    <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            The main purpose of this project is to understand the basics
                            of <strong>React.js</strong> by building a practical application.
                            It helps in learning important concepts such as components,
                            props, state, event handling and list rendering. This project
                            also demonstrates how React can be used to create interactive
                            web applications.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
