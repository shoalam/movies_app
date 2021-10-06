import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = ({ columns, items, onSort, sortColumn }) => {
    return (
        <table class="table">
            <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
            <TableBody columns={columns} items={items} />
        </table>
    );
}

export default Table;