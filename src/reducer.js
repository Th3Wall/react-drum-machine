export const initialState = {
    displaySoundName: 'React Drum Machine'
}

export const actionTypes = {
    SET_DISPLAY: "SET_DISPLAY"
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_DISPLAY:
            return {
                ...state,
                displaySoundName: action.soundName
            };
        default:
            return state;
    }
}

export default reducer;