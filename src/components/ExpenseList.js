import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from "./ExpenseListItem";
import visibilityFilter from "../selectors/expenses";

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>

        {props.expenses.map( (expense) => {
            return(
            <ExpenseListItem key={expense.id} {...expense}/>)
        })} 
    </div>
);
const mapStatetoProps = (state) => {
    return {
        expenses: visibilityFilter(state.expenses,state.filters)
    };
}
export default connect(mapStatetoProps)(ExpenseList);
