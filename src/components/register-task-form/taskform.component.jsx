import React from "react";
import { connect } from "react-redux";
import { addTask } from "../../redux/task/task.actions";

const mapDispatchToProps = dispatch => ({
    addTask: task => dispatch(addTask(task))
});

class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: ""
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        const { description } = this.state;
        this.props.addTask({ description });
        this.clearField();
    };

    clearField = () => this.setState({ description: "" });

    handleChange = event => {
        const target = event.target;
        this.setState({ description: target.value });
    };

    render() {
        const { description } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={this.handleChange}
                />
                <button type="submit">Add to List</button>
            </form>
        );
    }
}

// First argument of connect is mapStateToProps. Because we don't need it, we pass null
export default connect(null, mapDispatchToProps)(TaskForm);
