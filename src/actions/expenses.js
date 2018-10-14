import uuid from 'uuid';
export const addExpense = ( //these values come from user 
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
})
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

