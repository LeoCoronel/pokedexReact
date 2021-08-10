import React from 'react';

const Pagination = (props) => {

    const {onLeftClick, onRightClick, page, totalPages} = props;

    return (
        <div className="pagination">
            <button onClick={onLeftClick}>&#60;</button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}>&#62;</button>
        </div>
    )
}

export default Pagination;