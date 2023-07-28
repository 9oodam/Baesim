import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import {TopNav} from '../components/layout/nav'
import {SearchTop, SearchLeft, SearchRight} from '../components/layout/search'

const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const q = queryParams.get('q');
  const page = queryParams.get('page');

  useEffect(() => {
    console.log(q);
    console.log(page);
  })

  return (
    <>
      <TopNav addInput={true} keyword={q} />

      <SearchTop  />
      <SearchLeft />
      <SearchRight />
    </>
  )
}

export default Search
