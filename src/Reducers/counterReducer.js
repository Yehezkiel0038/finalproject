import ActionTypes from '../Actions/Index'

const initialState = {
    count: 0
}

export default function counterReducer (
state = initialState,
action
)
{
    switch(action.type) {
        case ActionTypes.INCREASE_COUNT:
            return {count: state.count + 5}
        case ActionTypes.DECREASE_COUNT:
            return {count: state.count - 5} 
        default:
            return state
    }

}