export const initialState = {
    use: null,
    playlist: [],
    playing: false,
    item: null,
    discover_weekly: null,
    spotify: null,
    top_artists: null,
    // token: "BQAz8x4WAAzGPUWu7tQeqDubiGodb60WVOWo5-Fr8KjobkaRf9TXP2_9V18uOyTbJUK9X2TsOGUGinyQUJvjBZPqNbAeUrxWUQpF1YZhdY8b5cSOk65RSsVGfIZ1Hivh4EHWHlRKvXruhvUKX-wtwqZpHUVbJDtx88dFe_Uir5J-3-T_JX1m",
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

        case 'SET_PLAYLIST':
            return {
                ...state,
                playlist: action.playlist,
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };

        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };

        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };

        default:
            return state;
    }


}

export default reducer