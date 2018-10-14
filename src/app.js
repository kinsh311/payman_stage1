import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // this will provide the redux state to react components 
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';

import visibilityFilter from './selectors/expenses';
import 'normalize.css/normalize.css'; //dig config rules
import './styles/styles.scss';

const store = configureStore();

store.subscribe(()=>{
    const state = store.getState();
    const visibility = visibilityFilter(state.expenses,state.filters); //dig selectors -> visibiltyFilter (filtering and sorting)
    console.log(visibility);
    
 })

// store.dispatch(setTextFilter('bill'));

// store.dispatch(addExpense({ description: 'water bill', amount: 10, createdAt: 100 }));
// store.dispatch(addExpense({ description: 'loan', amount: 220, createdAt: 10 }));
// store.dispatch(addExpense({ description: 'gas bill', amount: 100, createdAt: 120 }));


//her we are providing store to react component approuter now approuter has the state accessiblility 
const jsx = (
    <Provider store={store}> 
    <AppRouter />
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));




















