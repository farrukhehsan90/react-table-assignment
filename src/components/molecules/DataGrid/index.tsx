import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { DataGrid as Table } from '@material-ui/data-grid';
import { columns } from "../../../constant";
import { getNews } from "../../../store/actions/news";

const DataGrid = ({ searchVal }) => {
    const dispatch = useDispatch();
    const [searchRows, setSearchRows] = useState(null);
    const rows = useSelector((state: any) => state.newsReducer.news);

    useEffect(() => {
        dispatch(getNews());
    }, []);

    useEffect(() => {
        if (!!searchVal) {
            setSearchRows([
                ...rows.filter(row =>
                    row.Title.toLowerCase().startsWith(searchVal.toLowerCase())
                    || row.Description.toLowerCase().startsWith(searchVal.toLowerCase())
                )
            ]);
        } else {
            setSearchRows(null);
        }
    }, [searchVal])

    return (
        <div style={{ height: 550, width: '100%' }}>
            <Table rows={searchRows || rows} columns={columns} disableSelectionOnClick pageSize={10} />
        </div>
    );
};

export default DataGrid;