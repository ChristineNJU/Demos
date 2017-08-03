import { combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const staffs = [{
    id: 1,
    name: 'John Smith',
    status: 'Employed',
},{
    id: 2,
    name: 'Randal White',
    status: 'Unemployed',
},{
    id: 3,
    name: 'Stephanie Sanders',
    status: 'Employed',
},{
    id: 4,
    name: 'Steve Brown',
    status: 'Employed',
},{
    id: 5,
    name: 'Christopher Nolan',
    status: 'unemployed',
}];

function initStaffs(state = staffs) {
    return state;
}

const store = {
    initStaffs:initStaffs
};


export default initStaffs;