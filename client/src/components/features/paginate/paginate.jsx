import React from "react";
import { Pagination } from 'react-bootstrap'

export default function Paginate ({firstItem,lastItem,lastPage,Paginate,page}) {

  return (
      <Pagination>
        <Pagination.First onClick={()=>Paginate(1)}/>
        <Pagination.Prev disabled={page <= 1} onClick={() => Paginate(page-1)}/>
        <Pagination.Item onClick={()=>Paginate(1)} hidden={page === 1 || page === 2}>{1}</Pagination.Item>
        <Pagination.Ellipsis hidden={page === 1 || lastPage <= 3 || page === 2} />

        <Pagination.Item onClick={() => Paginate(page - 1)} hidden={page === 1}>{page - 1}</Pagination.Item>
        <Pagination.Item active>{page}</Pagination.Item>
        <Pagination.Item onClick={() => Paginate(page + 1)} hidden={page === lastPage || lastPage === (page + 1)}>{page + 1}</Pagination.Item>

        <Pagination.Ellipsis hidden={page === lastPage || lastPage <= 3 || lastPage === page + 1} />
        <Pagination.Item onClick={() => Paginate(lastPage)} hidden={page === lastPage}>{lastPage}</Pagination.Item>
        <Pagination.Next disabled={page >= lastPage} onClick={() => Paginate(page + 1)}/>
        <Pagination.Last onClick={() => Paginate(lastPage)}/>
      </Pagination>
  )
}