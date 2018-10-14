const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) =>{
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state,action.expense] //spread operator  ...state means add each item of state to this array and then add state.expense
        case 'REMOVE_EXPENSE':
            return state.filter(({ id })=>{  //filter takes function as a parameter and to that function we pass the object / or we can pass distructured id and inside body it returns all the object if its id is not equal to action.id
                return id !== action.id;
                })
        case 'EDIT_EXPENSE':
            return state.map(( expense )=> {
                if(expense.id === action.id){
                return {
                    ...expense,
                    ...action.updates
                }
            }
            else{
                return expense;
                    }
                })
            
        default: 
            return state;
    }
};
export default expensesReducer;