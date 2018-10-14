import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React from 'react';
import moment from 'moment';

const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onNoteChange = this.onNoteChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onAmountChange =  this.onAmountChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            error: ' '
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
        this.setState(() => ({amount}));
        }
    }
    onDateChange = (date) => {
        if(date){
            this.setState(()=>({createdAt : date}))
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(() => {
                return{
                    error: 'please enter correct amount and description'
                }
            })
        }
        else {
            const expense = {
                description : this.state.description,
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf(),
                amount: parseFloat(this.state.amount, 10) * 100
            }
            this.props.onSubmit(expense);
            this.setState(() => {
                return{
                     error : ''
                }
            });
        }
    }
    render() {
        return (
            <div>
                <h2>{this.state.error}</h2>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type = "text" 
                        placeholder = "Description" 
                        autoFocus 
                        value = {this.state.description}
                        onChange = {this.onDescriptionChange}
                    />                    
                    <input
                        type="text"
                        placeholder = "amount"
                        value = {this.state.amount}
                        onChange = {this.onAmountChange}
                    /><br />
                    <textarea 
                        placeholder = " add a note to your expense"
                        value = {this.state.note}
                        onChange = {this.onNoteChange}
                    />
                    <DatePicker
                        selected={this.state.createdAt}
                        onChange={this.onDateChange}
                    />
                    <button> add expense </button>
                </form>
            </div>
        )
    }
} 