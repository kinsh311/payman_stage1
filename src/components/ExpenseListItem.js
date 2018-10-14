import React from 'react';
import { Link } from 'react-router-dom';
const ExpenseListItem = ( {id, description, amount, note, createdAt} ) => (
    <div>
        <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        <p>{amount} - created at {createdAt}</p>
        <p>{note}</p> 
    </div>
)
export default ExpenseListItem;