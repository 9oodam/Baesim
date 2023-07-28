import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import {TopNav} from '../components/layout/nav'
import {SearchTop, SearchLeft, SearchRight} from '../components/layout/search'
import { useDispatch } from 'react-redux'

const Search = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const q = queryParams.get('q');
  const page = queryParams.get('page');

  useEffect(() => {
    console.log(q);
    console.log(page);
  })

  const openSearchRight = (id) => {
    console.log("title 눌림")
    dispatch(searchAction.selectCase(id))
  }

  return (
    <>
      <TopNav addInput={true} keyword={q} />

      <SearchTop  />
      <SearchLeft openSearchRight={openSearchRight} />
      <SearchRight />
    </>
  )
}

export default Search
