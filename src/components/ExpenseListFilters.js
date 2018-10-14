import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';
const ExpenseListFilters = (props) => (
    <div>
    <h2>{props.filters.text}</h2>
        {console.log(props.filters.text)}
        <input type="text" onChange ={ (e) => {
            props.dispatch(setTextFilter(e.target.value));
        } }/>
        <select onChange = {(e) => { 
            if(e.target.value === 'date')
            props.dispatch(sortByDate());
            else if(e.target.value === 'amount')
            props.dispatch(sortByAmount())
        }}>
            <option value = "date"> date </option>
            <option value = "amount"> Amount </option>
        </select>
    </div>
)
const mapStateToProps = (state) => {
    return{
        filters : state.filters
    }
}
export default connect(mapStateToProps)(ExpenseListFilters); 