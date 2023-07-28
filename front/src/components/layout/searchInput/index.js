import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';

import { searchAction } from '../../../middleware';

import { SearchInputBox } from './Input.styled'

import searchImg from '../../img/search.png'

const SearchInput = ({width, keyword}) => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState();

  // 검색창 placeholder
  let holder;
  if(keyword == undefined) {
    holder = '키워드를 검색하세요'
  }else {
    holder = keyword;
  }

  // 엔터키 눌렀을 때
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      moveToSearch();
    }
  };

  // Search 페이지로 이동
  function moveToSearch() {
    dispatch(searchAction.searchChk(search));
    // window.location.href = `/search/case?q=${search}&page=1`;
  }

  return (
    <SearchInputBox width={width}>
        <div className='search-input-wrap'>
          <div onClick={moveToSearch} className='search-img'><img src={searchImg} alt="" /></div>
          <input
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={handleKeyPress}
            className='search-input' type="text" placeholder={holder} />
        </div>
    </SearchInputBox>
  )
}

export {SearchInput}