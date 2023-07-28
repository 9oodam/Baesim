import React from 'react'
import { Nav, Top, Content } from './Mypage.styled'

import starF from '../../img/starF.png';
import graph from '../../img/graph.png';
import profile from '../../img/profile.png';

const MyPageTop = () => {
    return (
        <>
        <Top>마이페이지</Top>
        </>
    )
}

const MyPageNav = () => {
    let user_id = 'blah';

    return (
        <>
        <Nav>
            <div className='nav-item'>
                <img className='nav-icon' src={profile}></img>
                <p>ID : {user_id}</p>
            </div>
            <div className='nav-item'>
                <img className='nav-icon' src={starF}></img>
                <p>관심있는 판례</p>
            </div>
            <div className='nav-item'>
                <img className='nav-icon' src={graph}></img>
                <p>설문 완료한 판례</p>
            </div>
        </Nav>
        </>
    )
}

const MyPageMid = () => {
    return (
        <Content>
            <MyPageNav />
            <div className='content'>

            </div>
        </Content>
    )
}

export {MyPageTop, MyPageMid}