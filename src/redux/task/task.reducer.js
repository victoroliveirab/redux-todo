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
        }
    ]
};

const taskReducer = (state = INITIAL_STATE, action) => {
    // What each action should return
    // A new object is returned because redux's philosophy is that states are immutable
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: state.tasks.concat(action.payload)
            };
        case "REMOVE_TASK":
            return;
        default:
            console.warn(`Unknown action type: ${action.type}`);
            return state;
    }
};

export default taskReducer;
