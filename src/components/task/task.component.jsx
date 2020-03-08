import React from "react";
import { connect } from "react-redux";
import { removeTask } from "../../redux/task/task.actions";

const mapDispatchToProps = dispatch => ({
    removeTask: id => dispatch(removeTask(id))
});

const Task = ({ id, description, removeTask }) => (
    <li>
        {description} <a onClick={() => removeTask(id)}>[X]</a>
    </li>
);

export default connect(null, mapDispatchToProps)(Task);
