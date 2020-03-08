// Initial state of this reducer

const INITIAL_STATE = {
    tasks: [
        {
            id: 1,
            description: "Task example"
        },
        {
            id: 2,
            description: "Another task just to populate it"
        },
        {
            id: 3,
            description: "Generally, this array would start empty"
        },
        {
            id: 4,
            description: "Click the red cross to remove a task"
        }
    ]
};

const taskReducer = (state = INITIAL_STATE, action) => {
    // What each action should return
    // A new object is returned because redux's philosophy is that states are immutable
    switch (action.type) {
        case "ADD_TASK":
            const id =
                state.tasks.length === 0
                    ? 1
                    : state.tasks[state.tasks.length - 1].id + 1;
            const { description } = action.payload;
            return {
                ...state,
                tasks: state.tasks.concat({ id, description })
            };
        case "REMOVE_TASK":
            const index = state.tasks.findIndex(
                task => task.id === action.payload
            );
            return {
                ...state,
                tasks: state.tasks
                    .slice(0, index)
                    .concat(state.tasks.slice(index + 1))
            };
        default:
            console.warn(`Unknown action type: ${action.type}`);
            return state;
    }
};

export default taskReducer;
