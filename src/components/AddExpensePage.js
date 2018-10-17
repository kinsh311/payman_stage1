import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import Header from './Header';
import { startAddExpense } from '../actions/expenses'
const AddExpensePage = (props) => (
    <div>
    <Header />
    <ExpenseForm 
        onSubmit = { ( { description, amount, note, createdAt } ) => {
            props.dispatch(startAddExpense({description, amount, note, createdAt}));
            props.history.push('/');
        } } 
    />
     {props.expenses.length}
    </div>
);
const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}
export default connect(mapStateToProps)(AddExpensePage);