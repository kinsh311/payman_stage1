import React from 'react';
import ExpenseForm from './ExpenseForm';
import Header from './Header';
import { editExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { removeExpense } from '../actions/expenses';
const EditExpensePage = (props) => {
    console.log(props); //react passes props such as history ,location, match etc
    return (
            <div>
            <Header />
             this is from editing expense page of {props.match.params.id} {/*implicit props of react-router*/}
             <ExpenseForm expense = {props.expense} onSubmit = { (expense) => {
                props.dispatch(editExpense(props.expense.id,expense));
                props.history.push('/home');
             } }/>
             {/* above we used props.history.push and below we used traditional link to traverse*/}
             <Link to={`/home`}><button onClick={ ()=>{
                props.dispatch(removeExpense( {id: props.expense.id} ));
                
             } }>remove</button></Link>
            </div>
    )
}
const mapStateToProps = (state, props) => { // we can pass the current props like this
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)// matches the existing state and the current props(means the expense object with the given id)
    }
}
export default connect(mapStateToProps)(EditExpensePage);