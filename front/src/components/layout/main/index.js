import React, { useEffect, useState } from 'react'
import { MainSearchBox, Suggest, MainExamBox, MainExam } from './Main.styled'
import {SearchInput} from '../searchInput'
import { useSelector } from 'react-redux';

const MainTop = () => {
    // 정적 데이터로? db에서 Length 끌고오기?
    let caseNum = '1,234';
    let finNum = 567;


    return (
        <div>
            <MainSearchBox>
                <p className='big-text'>국내 최초 판례 설문 NFT 발행,</p>
                <p className='big-text'>배심자들.</p>
                <p className='small-text'>전체 판례 <span>{caseNum} 건</span> | 전체 설문 완료 수 <span>{finNum} 건</span></p>
                
                <SearchInput width={'750px'} />

                <div className='suggest-wrap'>
                    <Suggest># 살인</Suggest>
                    <Suggest># 성범죄</Suggest>
                    <Suggest># 절도</Suggest>
                </div>
            </MainSearchBox>
        </div>
    )
}

const MainMid = () => {
    return (
        <div>
            <MainExamBox>
                <MainExam width={'70%'} />
                <MainExam width={'30%'} />
            </MainExamBox>
        </div>
    )
}


export {MainTop, MainMid}