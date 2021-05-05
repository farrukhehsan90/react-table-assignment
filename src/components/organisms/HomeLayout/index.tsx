import React, { Fragment, useState } from 'react';
import { Header, DataGrid } from "../../molecules";

const HomeLayout = () => {
    const [searchVal, setSearchVal] = useState('');

    return (
        <Fragment>
            <Header setSearchVal={setSearchVal} searchVal={searchVal} />
            <DataGrid searchVal={searchVal} />
        </Fragment>
    );
};

export default HomeLayout;