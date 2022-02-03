import '../../style/AboutBox.scss';

export default function AboutBox() {
  return (
    <article id="aboutBox">
      <h2>about</h2>
      <div className="about_area">
        <div className="img_part"></div>
        <div className="text_part">
          <dl>
            <dt>성장과 소통을 중시하는 김영선입니다.</dt>
            <dd>
              평소에 쉽게 접하게 되는 웹페이지 및 앱을 사용하면서 <br /> 웹페이지 구성 및 디자인에 관심을 갖게 되었습니다. <br />
              이를 좀 더 전문적으로 배워보고자 직업 능력 개발 훈련 과정인 <br /> UI&amp;UX 프론트엔드&#95;react.js 과정을 수료하였습니다. <br />
              처음으로 접하는 분야이기 때문에 어려움이 있었으나 개발을 하는 과정에서 <br /> 성취감과 흥미를 더 크게 느낄 수 있었습니다. <br />
              저는 다양한 사람들과 소통을 자주 하며 의견 나누는 것을 좋아합니다. <br />
              개발이란 혼자만 하는 것이 아닌 많은 사람들과 의견을 나누며 하는 것이 스스로가 <br /> 성장하는데에 큰 도움이 된다고 생각합니다. <br />
              원활한 소통인 장점을 통해 더 성장할 수 있도록 노력하겠습니다.
            </dd>
          </dl>
        </div>
      </div>
    </article>
  )
}
