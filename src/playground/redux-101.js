import {createStore} from 'redux'; //create state container
//destructuring example
const add = ({ a, b, c }) => {
    return a + b + c;
}
console.log(add({ a: 1, b: 12, c: 12}));
//
//action generator - function that returns action object
// const incrementCount = (payload = {}) => ( //we use default , if nothing is passed to it.
//         {
//         type: 'INCREMENT',
//         incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy: 1 // if the incrementBy is no. take that no, or else use 1
//     }
// )
//  THE ABOVE CODE CAN BE TWEAKED USING DESTRUCTURING
const incrementCount = ({ incrementBy = 1 } = {}) => ({ //setting default as 1 and whole object's default as empty object
    type: 'INCREMENT',
    incrementBy :incrementBy
})

const decrementCount = ( { decrementBy = 1 } = {} ) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
})
const reset = () =>({ type: 'RESET', count: 0 });
const set = ({ count }) =>({ type: 'SET', count: count });

//reducers: rules to be followed
 // 1. pure function : output is only determined by input // doesnt change anything outside its scope
 // 2. never change state or function means no assigning it to const say count: 12
const countReducer = (state = {count : 0},action)=>{ // this function is called reducer function : reducer determines what to do based on the action
    // means what state to change based on some action
    switch (action.type)                                   
    {
        case 'INCREMENT':
            return {
            count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy ==='number' ? action.decrementBy : 1
            return{
            count: state.count - decrementBy
            }
        case 'RESET':
            return{
            count: 0
            }
        case 'SET':
            return{
            count: action.count
            }
        default:
            return state;
    }        
}
const store = createStore( countReducer ); // we pass/reference the reducer to createStore function that is inbuilt redux function
//the above code creates state container and as we are not dealing with class , we dont have constructor to set the default state so we pass
//a function inside the createStore function(reducer) , that takes the state object as a parameter and we set our default state their only

const unsbscribe = store.subscribe(()=>{       //do something when state changes
    console.log(store.getState());
})

store.dispatch(incrementCount({ incrementBy: 5 })); //passing object to action generator
store.dispatch(incrementCount());
store.dispatch(decrementCount( { decrementBy: 5 } ));
store.dispatch(reset());
store.dispatch(set({ count:333 }));
unsbscribe();  // this will stop the subscribe means it will stop doing stuff defined in subscribe after this .. but the state will still change
store.dispatch(reset());
//
var a=10;
var b=5;