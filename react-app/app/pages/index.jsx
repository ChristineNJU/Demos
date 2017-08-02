import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

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

const List = ({history}) => {

    function handleClick (rowNumber,columnId){
        history.push('/detail/'+rowNumber);
    }

    return(
        <Table showCheckboxes={false} onCellClick={handleClick}>
            <TableHeader displaySelectAll={false}
                         adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn>ID</TableHeaderColumn>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Status</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
                {data.map((item,index) => {
                    return (
                        <TableRow key={index} >
                            <TableRowColumn>{item.id}</TableRowColumn>
                            <TableRowColumn>{item.name}</TableRowColumn>
                            <TableRowColumn>{item.status}</TableRowColumn>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
};

export default List;