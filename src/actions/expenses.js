import uuid from 'uuid';
import database from '../firebase/firebase';

export const addExpense = (expense) => (
{ 
    type: 'ADD_EXPENSE',
    expense
    }
)
export const startAddExpense = ( expensedata = {} ) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0, 
            createdAt = 0
        } = expensedata;
        const expense = { description, note, createdAt,amount}
        database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}

//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id: id
})
//EDIT_EXPENSE
export const editExpense = ( id,updates ) => {
    return{
    type: 'EDIT_EXPENSE',
    id: id, 
    updates
}}

