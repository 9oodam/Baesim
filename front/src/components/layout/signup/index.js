import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import { ethers } from 'ethers';
import axios from 'axios';

import {loginAction} from '../../../middleware';

import { SignupBox, Title, Step, SubTitle, Label, Input, Text, Button } from './Signup.styled'

import metamask from '../../img/metamask.png'


const SignupMid = () => {
    const [color, setColor] = useState('rgb(200, 200, 200)');
    const [clicked, setClick] = useState('none');
    const [show, setShow] = useState('none');

    const [user_id, setId] = useState();
    const [user_pw, setPw] = useState();

    // Step1 (metamask 계정 인증)
    const getAccountInfo = async () => {
        try {
          // Metamask 연결 요청
          await window.ethereum.enable();
  
          // Metamask 인증 완료 확인
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const address = await signer.getAddress();
  
          console.log("사용자의 이더리움 주소:", address);
          
          setTimeout(() => {        
            setColor('rgb(85, 85, 85)');
            setClick('');
            setShow('block')
          }, 3000);
          
        } catch (error) {
          console.error("Metamask 인증 실패:", error);
          window.location.href = 'https://metamask.io/';
        }
    };

    // Step2 (id 중복 검사 후 회원가입)
    const trySignup = async() => {
        console.log("회원가입 시도")
        console.log(user_id, user_pw)

        if(user_id == undefined) {
            alert("아이디를 입력해주세요.")
        }else if(user_pw == undefined) {
            alert("비밀번호를 입력해주세요.")
        }else {
            try {
                // await axios.post(`http://localhost:8080/signup`, {
                //     withCredential : true
                // });

                window.location.href = '/login'
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <SignupBox>       
            <Title>
                반갑습니다.<br />
                회원가입을 시작하겠습니다.
            </Title>

            <Step>
                <SubTitle>Step 1</SubTitle>
                <Label>MetaMask 계정 인증하기</Label>
                <div className='goto' onClick={() => {getAccountInfo()}}>
                    <img src={metamask}></img>
                </div>
                <Text show={show}>인증이 완료되었습니다.</Text>
            </Step>

            <Step color={color} clicked={clicked}>
                <SubTitle>Step 2</SubTitle>
                <Label color={color}>아이디</Label>
                <Input onChange={(e) => {setId(e.target.value)}} clicked={clicked} placeholder='아이디를 입력해주세요.' />
                <Label color={color}>비밀번호</Label>
                <Input onChange={(e) => {setPw(e.target.value)}} clicked={clicked} placeholder='영문자, 숫자, 특수문자를 사용하여 8자 이상 입력해주세요.' />
                <Button onClick={trySignup} clicked={clicked} color={color}>회원가입</Button>
            </Step>

        </SignupBox>
    )
}

const LoginMid = () => {
    const dispatch = useDispatch();

    const [user_id, setId] = useState();
    const [user_pw, setPw] = useState();

    const msgID = useSelector(state => state.login.msgID);
    const msgPW = useSelector(state => state.login.msgPW);

    // 로그인 시도
    function tryLogin() {
        console.log("로그인 시도")
        console.log(user_id, user_pw)

        dispatch(loginAction.loginChk(user_id, user_pw));
    }

    // 로그인 완료되면 메인페이지로 이동
    const isLogin = useSelector(state => state.login.isLogin);
    useEffect(() => {
        if(isLogin) {
            window.location.href = '/';
        }
    })

    return (
        <SignupBox>
            <Title>
                국내 최초 판례 설문 NFT 발행,<br />
                배심자들.
            </Title>

            <Step>
                <Label>아이디</Label>
                <Input onChange={(e) => setId(e.target.value)} placeholder='아이디를 입력해주세요.' />
                <div className='msg'>{msgID}</div>
                <Label>비밀번호</Label>
                <Input onChange={(e) => setPw(e.target.value)} placeholder='비밀번호를 입력해주세요.' />
                <div className='msg'>{msgPW}</div>
                <Button onClick={tryLogin}>로그인</Button>
            </Step>

            <Step>
                <Label>아직 회원이 아니신가요?</Label>
                <Link to={'/signup'}>
                    <Button>회원가입으로 이동</Button>
                </Link>
            </Step>
        </SignupBox>
    )
}

export {SignupMid, LoginMid}
