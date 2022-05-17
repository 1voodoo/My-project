import { FC } from "react";
import './PaginateButton.scss';
import ReactPaginate from "react-paginate";
import ArrowRight from '../../src/components/image/ArrowRight.svg'
import ArrowLeft from '../../src/components/image/ArrowLeft.svg'


export interface IPaginationProps {
    initialPage?: number;
    marginPagesDisplayed?: number;
    pageCount: number;
    pageRangeDisplayed: number;
    onChange: ({ selected }: { selected: number }) => void;
}

const PaginateButton: FC<IPaginationProps> = ({
    initialPage,
    marginPagesDisplayed,
    pageCount,
    pageRangeDisplayed,
    onChange}) => {

    return (
        <ReactPaginate 
            initialPage={initialPage} 
            marginPagesDisplayed={marginPagesDisplayed} 
            pageCount={pageCount} 
            pageRangeDisplayed={pageRangeDisplayed} 
            onPageChange={onChange}
            containerClassName='Pagination'
            activeClassName="Pagination__active"
            pageLinkClassName="Pagination__page-link"
            breakLinkClassName="Pagination__break-link"
            nextLinkClassName="Pagination__next-link"
            previousLinkClassName="Pagination__previous-link"
            pageClassName="Pagination__page-item"
            breakClassName="Pagination__break-item"
            nextClassName="Pagination__next-item"
            previousClassName="Pagination__previous-item"
            previousLabel={ <><img className="ArrowLeft" src={ArrowLeft} alt="icon" /></>}
            nextLabel={ <><img className="ArrowRight" src={ArrowRight} alt="icon"/></>}

        />
    );
};

export default PaginateButton;
