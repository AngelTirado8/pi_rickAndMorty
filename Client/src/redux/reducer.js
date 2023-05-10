
let initialState ={allCharacters: [], myFavorites: [] };

function reducer  (state = initialState, action) {
    switch (action.type){
        case 'ADD_FAVORITE':
            // let copy1 = state.myFavorites;
            // copy1.push(payload);
        return {
            ...state,
            myFavorites: action.payload,
            allCharacters: action.payload,
        };
        case 'REMOVE_FAVORITE':
            // let copy2 = state.myFavorites.filter((char)=>{
            //     return char.id !== Number(payload)
            // })
            // return { ...state, myFavorites: copy2 }

            return { ...state, myFavorites: action.payload };

        default:
            return { ...state }
    }
};

export default reducer;