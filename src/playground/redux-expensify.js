import { createStore, combineReducers } from 'redux'; //redux is a state container : 
import uuid from 'uuid';
import { PassThrough } from 'stream';
//combine reducers -> multiple reducers

//ADD_EXPENSE
const addExpense = ( //these values come from user 
    { 
        description = '',
        note = '',
        amount = 0, 
        createdAt = 0
        }={}
) => ({ 
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id: id
});
//EDIT_EXPENSE
const editExpense = (  {id, amount,note } = {} ) => {
    return{
    type: 'EDIT_EXPENSE',
    id: id, 
    updates: {amount,note}
}}
//SET_TEXT_FILTER
const setTextFilter = ( text ) => ({
    type: 'SET_TEXT_FILTER',
    text
})
//SORT_BY DATE
const sortByDate = (sort) => ({
    type: 'SORT_BY_DATE',
    sort
})
//SORT_BY_AMMOUNT
const sortByAmount = (sort) => ({
    type: 'SORT_BY_AMOUNT',
    sort
})
//SET_START_DATE
const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    startDate: date
})
//SET_END_DATE
const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    endDate: date
})
//create 2 reducers 1 that handles expenses and another that handles filters

//expenses reducers

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

//filters reducers
const filtersReducerDefaultState = {
    text: '',
    sort: 'date', //date or amount
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState,action) =>{
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            };
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sort: action.sort
            }
        case 'SORT_BY_DATE':
            return{
                ...state,
                sort: action.sort
            }
        case 'SET_START_DATE':
            return{
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return{
                ...state,
                endDate: action.endDate
            }
            
        default:
            return state;
    }
}
//filter text

//store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);
// store.subscribe(()=>{console.log(store.getState())});
store.subscribe(()=>{
    const state = store.getState();
    const visibility = visibilityFilter(state.expenses,state.filters);
    console.log(visibility);
    
})
const visibilityFilter = (expense,filters)=>{
        const res = expense.filter((expense)=>{
            const startDateMatch = expense.createdAt >= filters.startDate;
            const endDateMatch = expense.createdAt <=filters.endDate;
            let textMatch = false;
            if(expense.description.toLowerCase() === filters.text.toLowerCase()){
                textMatch = true;
            }
            return startDateMatch && endDateMatch && textMatch;
            // if(expense.createdAt >=filter.startDate && expense.createdAt <= filter.endDate){
            //     return true //same as return expense
            // }
        }
    )
    return res;
}


const add1 = store.dispatch(addExpense({ description: 'rent', amount: 100,createdAt:100}));
const add2 = store.dispatch(addExpense({ description: 'service', amount: 300,createdAt:150}));
const add3 = store.dispatch(addExpense({ description: 'Rent', amount: 150, createdAt: 150}));
// store.dispatch(removeExpense( {id: add1.expense.id} ));

store.dispatch(editExpense( {id: add2.expense.id, amount: 213, note:'laptop' } ));
store.dispatch(setTextFilter( 'rent' ));
store.dispatch(sortByAmount('amount'));
store.dispatch(sortByDate('2017'));
store.dispatch(setEndDate('175'));
store.dispatch(setStartDate('50'));

// //spreading object
// const user ={
//     name: 'john',
//     age: 24
// };
// console.log({
//     ...user,
//     location: 'asda',
//     age:22 //reassigning existing object property
// })
// //
// let a=10
// let b=5
// a=(a+b)-(b=a);
// console.log(a,b);


