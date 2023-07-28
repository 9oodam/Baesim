import React, { useEffect, useState } from 'react'

import { SearchTopBox, SearchMidBox, PaginationBox, DetailBox, BtnBox, CircleBtn, TitleBox, Disabled, Survey } from './Search.styled'
import Select from '../../util/Select'
import Case from '../../util/Case'

import starE from '../../img/starE.png'
import starF from '../../img/starF.png'
import graph from '../../img/graph.png'
import right from '../../img/right.png'
import { useSelector } from 'react-redux'


const SearchTop = () => {
    const [isClick1, setClick1] = useState(false);
    const [isClick2, setClick2] = useState(false);
    const [isClick3, setClick3] = useState(false);

    return (
        <>
        <SearchTopBox>
            <Select select={'기간'} isClick={isClick1} setClick={setClick1} />
            <Select select={'조회수'} isClick={isClick2} setClick={setClick2} />
            <Select select={'설문 완료수'} isClick={isClick3} setClick={setClick3} />
        </SearchTopBox>
        </>
    )
}

const SearchLeft = ({openSearchRight}) => {
    // db에서 axios로 정보 받아와서 넘기기...
    let searchArr = useSelector(state => state.search.searchArr);

    return (
        <>
        <SearchMidBox>
            {searchArr.map((value, index) => {
                return <Case key={index} value={value} openSearchRight={openSearchRight} />
            })}
            <PaginationBox>

            </PaginationBox>
        </SearchMidBox>
        </>
    )
}

const ReasonBox = () => {
    let reason1;
    let reason2 = `원심판결을 파기한다.
    피고인을 징역 35년에 처한다.
    압수된 칼 1개(증 제1호)를 몰수한다.`;
    let reason3 = `1. 항소이유의 요지
    양형부당 : 원심의 형(무기징역)이 너무 무거워서 부당하다.
    2. 판단
    사람의 생명은 그 무엇과도 바꿀 수 없이 소중하고 존엄하다. 이 사건 각 범행은 피고인이 형이 운영하는 관광호텔에서 일하면서 형수와 조카들이 자신을 무시하고 모욕하였다는 이유로 격분하여 칼로 조카인 피해자 공미○의 등을 2회 찌르고, 계속하여 조카인 피해자 공매○의 복부를 수회 찌른 다음, 형수인 피해자 도옥○의 등을 수회 찔러 피해자 도옥○과 공매○을 살해하고, 피해자 공미○를 살해하려다 미수에 그친 것으로 이와 같은 범행은 어떠한 이유로도 합리화될 수 없는 반인륜적인 범죄로서 그 결과가 너무나도 참혹하고 중한 것은 분명하다.
    원심은 이 사건 살인이 양형기준에 따른 특별가중인자인 '계획적 살인 범행 (범행도구의 사전 준비 및 소지)'에 해당된다고 보고, 1 피고인은 미리 범행도구를 준비하였고, 조카들을 순차적으로 찌른 다음 형수를 마주치자 칼로 등 부위를 수회 찔렀는데, 당시 피해자들이 피고인에게 위협을 가할만한 어떤 도구도 휴대하지 않았던 점을 고려하면 범행방법이 매우 잔인하고 대담한 점, 2 피해자들은 엄청난 고통과 극심한 공포 속에서 목숨을 잃었을 것으로 보이고, 피해자들의 유족은 소중한 가족을 한순간에 잃었고, 평생 치유될 수 없는 상처를 입게 된 점, 3 그럼에도 피고인은 유족의 고통을 조금이나마 위로할 만한 어떠한 노력도 하지 않았고, 오히려 피고인은 재판 과정에서 피해자들로부터 부당한 대우를 받았다며 책임을 전가하는 태도를 보이고 있는 등 진정성 있게 반성하고 있는지 의심스러운 점, 4 피고인은 피해자들의 유족으로부터 용서를 받지 못하였고, 피해자들의 유족이 피고인에 대한 엄벌을 원하고 있는 점 등을 고려하여 피고인에게 무기징역형을 선고하였다. 그러나 기록에 의하면, 피고인이 이 사건 범행 전날 칼 2자루, 노끈, 도마, 막걸리, 물 등을 구입하였고 그 중 칼 1자루가 이 사건 범행에 사용된 사실은 인정되나, 그와 같은 사정만으로 피고인이 살인 범행을 위한 범행도구를 사전에 준비하였다고 단정할 수는 없다. 오히려 기록에 의하면, 피고인은 자신이 잠시 부재중일 때 피해자 공매○, 공미○경이 피고인이 거주하던 방에 들어와 짐을 복도에 던지는 모습을 보고, 방에 있는 의자에 앉아 캔맨주를 따서 마시다가, 순간 격분하여 피해자 공매○, 공미○경을 향해 가위를 던지고, 책상 서랍에 있던 칼을 꺼내어 피해자 공매○, 공미○경을 찌른 사실만이 인정될 뿐이다. 피고인은 이사를 위해 노끈을 구입하였고, 요리를 하려고 칼을 구입하였으며, 이 사건 범행 전 요리를 하기 위해서 차안에 있는 도마를 가지러 주차장에 갔다가 돌아와 보니 위 피해자들이 짐을 복도에 던지고 있었다고 변명하고 있는데, 이러한 변명을 배척할 만한 사정은 기록상 발견할 수 없다. 따라서 이 사건 범행은 피고인이 살인 범행을 위한 범행도구를 사전에 준비 및 소지한 계획적 살인 범행으로 단정하기 어렵고, 달리 이 사건 범행이 계획적 살인 범행에 해당한다고 인정할 만한 자료가 없다.
    또한, 피고인은 이 사건 전까지 형사처벌을 받은 전력이 없는 초범이다. 피고인의 지인들이 선처를 탄원하고 있다. 피고인과 피해자들 사이에 금전적 문제가 있었고, 조카인 피해자 공매○, 공미○경의 다소 무례한 행동이 피고인의 행위에 영향을 미쳤다고 볼 수도 있다.
    이러한 여러 사정을 포함하여 뒤에서 보는 당심이 인정하는 양형기준상 권고형의 범위, 피고인의 나이 ·성행·환경, 피해자에 대한 관계, 범행의 동기 · 수단·결과, 범행 후의 정황 등 이 사건 변론과 기록에 나타난 제반 양형조건을 종합적으로 고려하면, 원심이 이 사건 범행을 계획적 살인 범행으
    로 잘못 평가한 전제 아래 이 사건에 적용되기 어려운 양형기준상 권고형의 범위를 적용하여 선고한 형은 피고인에게 불리한 다른 사정들을 감안하더라도, 피고인의 책임 정도에 비하여 지나치게 무거워서 부당하다.
    따라서 피고인의 양형부당 주장은 이유 있다.
    3. 결론
    피고인의 항소는 이유 있으므로, 형사소송법 제364조 제6항에 따라 원심판결을 파기하고 변론을 거쳐 아래와 같이 다시 판결한다.
    [다시 쓰는 판결 이유]
    범죄사실 및 증거의 요지
    원심판결 기재와 같다.
    법령의 적용
    1. 범죄사실에 대한 해당법조 및 형의 선택
    각 형법 제250조 제1항(피해자 공매○, 도옥○에 대한 살인의 점, 유기징역형 선택), 형법 제254조, 제250조 제1항(살인미수의 점, 유기징역형 선택)
    1. 경합범가중
    형법 제37조 전단, 제38조 제1항 제2호, 제50조(범정이 가장 무거운 피해자 도옥O에 대한 살인죄에 정한 형에 경합범가중)
    1. 몰수
    형법 제48조 제1항 제1호
    양형의 이유
    1. 법률상 처단형의 범위 : 징역 5년 이상 45년 이하
    2. 양형기준에 따른 권고형의 범위
    가. 제1~2범죄 : 각 살인죄
    [권고형의 범위]
    제2유형(보통 동기 살인) > 기본영역(10년~16년)
    [특별양형인자]
    없음
    나. 제3범죄 : 살인미수죄
    [권고형의 범위]
    제2유형(보통 동기 살인) > 가중영역(5년 이상, 20년 이상 또는 무기)
    서술식기준 : 살인미수(살인미수범죄이므로 권고형량 범위의 하한을 1/3로, 상한을 2/3로 각 감경)
    [특별가중인자]
    중한상해 - 미수인 경우
    다. 다수범죄의 처리 : 징역 10년 ~ 무기징역
    3. 선고형의 결정
    위에서 본 여러 양형조건들을 종합하여 주문과 같이 형을 정한다.`;

    return (
        <div className='reason-box'>
            <div className='reason1'>
                <h1>부산고등법원 제2형사부 판결</h1>
                <ul>
                    <li>사건 : 2018노22 살인, 살인미수</li>
                    <li>피고인A : 항소인피고인</li>
                    <li>검사 : 유지열(기소), 박재영(공판)</li>
                    <li>변호인 : 법무법인 ○이파트너스</li>
                    <li>원심 : 판결울산지방법원 2017. 12. 8. 선고 2017고합219</li>
                    <li>판결 : 판결선고2018. 5. 30.</li>
                </ul>
            </div>
            <div className='reason2'>
                <h1>주문</h1>
                {reason2}
                </div>
            <div className='reason3'>
                <h1>이유</h1>
                {reason3}
            </div>
        </div>

    )
}

const SearchRight = () => {
    let test = '부산고등법원 2018. 5. 30. 선고 2018노22 판결 살인,살인미수';
    let result = '징역 N년N월';

    return (
        <>
        <DetailBox>
            <BtnBox>
                <CircleBtn left={'15px'}>
                    <img src={starE}></img>
                </CircleBtn>
                <CircleBtn left={'55px'}>
                    <img src={graph}></img>
                </CircleBtn>
                <div className='close-btn'>x</div>
            </BtnBox>

            <TitleBox>
                {test}
                <div className='result'>{result}   <span>미리보기</span></div>
            </TitleBox>


            <ReasonBox />


            <Survey>
                <div className='info'>
                    <p>여러분이 생각하는 해당 판례의 <span className='underline'>적절한 형량</span>은 얼마인가요?<br />
                        설문을 진행하시면 여러분의 의견이 담긴 <span className='bold'>세상에서 단 하나뿐인 NFT</span>가 발행됩니다.
                    </p>
                </div>
                <div className='make-nft'>
                    <label>징역</label>
                    <input type='number' min={0} max={30} defaultValue={0}></input>
                    <label>년</label>
                    <input type='number' min={0} max={12} defaultValue={0}></input>
                    <label>월</label>

                    <div className='make-nft-btn'>
                        설문 완료 후 NFT 발행하기
                        <img src={right}></img>
                    </div>
                </div>

                <Disabled>로그인 후 이용 가능</Disabled>
            </Survey>
            
        </DetailBox>
        </>
    )
}

export {SearchTop, SearchLeft, SearchRight}
