import React from "react";
import { connect } from "react-redux"; // superpowers component with redux
import Task from "../task/task.component";

const mapStateToProps = state => ({
    tasks: state.task.tasks
});

const TaskList = ({ tasks }) => {
    console.log(tasks);
    return (
        <ul>
            {tasks.map(task => (
                <Task key={task.id} {...task} />
            ))}
        </ul>
    );
};

export default connect(mapStateToProps)(TaskList);
// Now TaskList has access to the tasks object inside of the store
