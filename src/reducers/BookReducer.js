export const bookReducer= (state,action) => {
    switch(action.type){
        case 'ADD_BOOK':
            return [...state,{...action.book}];
        case 'REMOVE_BOOK':
            console.log(action);
            return state.filter((book,index)=> index !==action.id);
    }
}