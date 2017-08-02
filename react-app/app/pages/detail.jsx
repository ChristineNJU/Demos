import React from 'react';

const data = [{
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

const Detail = ({match}) => {
    console.log(match.params.id);
    let item = data[match.params.id];
    return(
        <div>
            <div>{item.id}</div>
            <div>{item.name}</div>
            <div>{item.status}</div>
        </div>
    )
};

export default Detail;