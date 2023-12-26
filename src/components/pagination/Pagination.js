import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ itemsPerPage, data }) => {

    const [itemOffset, setItemOffset] = useState(0);
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);

    console.log("🚀 ~ file: Pagination.js:5 ~ Pagination ~ itemsPerPage:", "currentItems:", currentItems, itemsPerPage)


    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data?.products?.slice(itemOffset, endOffset));
        setPageCount(Math?.ceil(data?.products?.length / itemsPerPage));
    }, [itemOffset, data])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };


    return (
        <>
            
            {/* <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            /> */}
        </>
    )
}

export default Pagination