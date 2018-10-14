import filtersReducer from '../../reducers/filters'
test('testing default filter reducer',() => {
    const state  =  filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    })
})