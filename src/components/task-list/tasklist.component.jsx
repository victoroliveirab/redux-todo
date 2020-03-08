import React from "react";
import { connect } from "react-redux"; // superpowers component with redux

const mapStateToProps = state => ({
    tasks: state.task.tasks
});

const TaskList = ({ tasks }) => {
    console.log(tasks);
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>{task.description}</li>
            ))}
        </ul>
    );
};

export default connect(mapStateToProps)(TaskList);
// Now TaskList has access to the tasks object inside of the store
