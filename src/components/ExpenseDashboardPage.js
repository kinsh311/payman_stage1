import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import Header from './Header';
const ExpenseDashboardPage = () => (
    <div>
     <Header />
     <ExpenseListFilters />
     <ExpenseList />
    </div>
)
export default ExpenseDashboardPage;