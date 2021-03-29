export default {
    state:0,
    reducers:{
        increase(state) {
            state + 1;
            return state;
        },
        decrease(state) {
            state -1 ;
            return state;
        }
    }
}