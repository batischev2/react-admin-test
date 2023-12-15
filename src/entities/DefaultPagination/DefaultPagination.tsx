import React, {ReactElement} from "react";

import Pagination from 'react-bootstrap/Pagination';

interface DefaultPaginationProps {
    pageCount: number,
    currentPage: number
}

export const DefaultPagination:React.FC<DefaultPaginationProps> = ({pageCount, currentPage}) => {
    let items: ReactElement[] = [];
    for (let number = 1; number <= pageCount; number++) {
        items.push(
            <Pagination.Item key={number} active={number === currentPage}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <Pagination>
            {items}
        </Pagination>
    );
};
