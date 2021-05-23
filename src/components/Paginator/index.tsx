import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { fetchUsersRequest } from "../../store/users/actions";
import { PaginatorWrapp, NumberButton, Left, Right } from "./styles";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  pending: boolean;
};

const Pagination = ({ currentPage, totalPages, pending }: PaginationProps) => {
  const dispatch = useDispatch();

  //Fetch the new data frm the backend with the new page number
  const selectPage = useCallback(
    (item: number) => () => {
      dispatch(fetchUsersRequest({ page: item }));
    },
    [dispatch]
  );

  // To check if we are in the first or the last page to not allow the user to click on the arrows
  const disabledLeft = pending || currentPage === 1;
  const disabledRight = pending || currentPage === totalPages;

  return (
    <PaginatorWrapp>
      <Left
        onClick={disabledLeft ? undefined : selectPage(currentPage - 1)}
        disabled={disabledLeft}
      />
      {Array.from({ length: totalPages }, (_, index) => {
        // Const used for not allow the user to click on the current page
        const selected = pending || currentPage === index + 1;
        return (
          <NumberButton
            key={index}
            onClick={selected ? undefined : selectPage(index + 1)}
            selected={selected}
          >
            {index + 1}
          </NumberButton>
        );
      })}
      <Right
        onClick={disabledRight ? undefined : selectPage(currentPage + 1)}
        disabled={disabledRight}
      />
    </PaginatorWrapp>
  );
};

export default Pagination;
