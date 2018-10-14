import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';
import moment from 'moment';
test('test start date',() => {
const action = setStartDate(moment(0));
expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
})
});
test('test end date',() => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});
test('sorting by amount',()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})
test('sorting by date',()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})
test('setting text filter',()=>{
    const action = setTextFilter('bill');
    expect(action).toEqual({
        text: 'bill',
        type: 'SET_TEXT_FILTER'
    })
})


