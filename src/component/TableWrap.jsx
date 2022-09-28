import * as React from "react";

const TableWrap = (props) => {
    const { title, children } = props;
    return (
        <div className='tableWrap'>
            <div className='head'>
                <div className='title'>{title}</div>
            </div>
            {children}
        </div>
    );
};

export default TableWrap;
