import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import { isNumber, isString } from 'util';
test('test removeExpense',() => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('test editExpense', () => {
    const action = editExpense('123asdf',
        {
            description : 'hello',
            note: 'hello note',
            amount: 1234
        }
    );
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123asdf',
        updates: {
            description : 'hello',
            note: 'hello note',
            amount: 1234
        }
    })
})
test('addExpense with values',() => {
    const action = addExpense({
        
        description: 'bill',
        note: 'water bill',
        amount: 123,
        createdAt : 1234
    });
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            id: expect.any(String),
            description: 'bill',
            note: 'water bill',
            amount: 123,
            createdAt : 1234
        }
    })
})
test('addExpense with default values',() => {
    const action = addExpense({
      
        description: 'bill',
        note: 'water bill',
        createdAt : 1234
    });
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            id: expect.any(String),
            description: 'bill',
            note: 'water bill',
            amount: 0,
            createdAt : 1234
        }
    })
})