const visibilityFilter = (expense,filters)=>{
    const res = expense.filter((expense)=>{
        const startDateMatch = typeof filters.startDate !=='number' || expense.createdAt >= filters.startDate;
        const endDateMatch = typeof filters.endDate !== 'number' || expense.createdAt <=filters.endDate;
        let textMatch = false;
        if(expense.description.toLowerCase().includes(filters.text.toLowerCase())){
            textMatch = true;
        }
        return startDateMatch && endDateMatch && textMatch;
        // if(expense.createdAt >=filter.startDate && expense.createdAt <= filter.endDate){
        //     return true //same as return expense
        // }
    }
).sort((a,b) => {
    if(filters.sortBy === 'date'){
        return a.createdAt < b.createdAt ? 1 : -1;
    }
    else if (filters.sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
    }
})
return res;
}
export default visibilityFilter