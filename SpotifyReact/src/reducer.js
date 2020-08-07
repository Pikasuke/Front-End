export const initialState = {
    use: null,
    playlist: [],
    playing: false,
    item: null,
    token: "BQAz8x4WAAzGPUWu7tQeqDubiGodb60WVOWo5-Fr8KjobkaRf9TXP2_9V18uOyTbJUK9X2TsOGUGinyQUJvjBZPqNbAeUrxWUQpF1YZhdY8b5cSOk65RSsVGfIZ1Hivh4EHWHlRKvXruhvUKX-wtwqZpHUVbJDtx88dFe_Uir5J-3-T_JX1m",
}

const reducer = (state, action) => {
    console.log(action);

    //Action =>type [payload}

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }

        default:
            return state;
    }


}

export default reducer