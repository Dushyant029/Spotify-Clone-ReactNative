export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    // token:'BQBbd8D5eJ3cbaDMl_Oa7VZVU3wrccXxqKrCNlSiz0K_MG643ZRFho9pMA-glJOdNC6OTTyD7JYjABlG8wU-X1P5cQ0Fe7wU7fSg426BbPS57Qq2DVxNuyd15MI93RyiezlBZcmyRtDew6E1qFJlAlXga2vCL_lahFF_9CmrRhYMTUnv',
};

const reducer =(state, action)=> {
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists:action.playlists
            };        
        case 'SET_DISCOVERY_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };        
            default:
                return state;
    }
}

export default reducer;