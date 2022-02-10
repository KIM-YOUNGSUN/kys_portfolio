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
              웹 사이트를 사용하면서 '어떻게 하면 사용자 입장에서 더 편리하게 구성할 수 있을까?'라는 궁금증과 함께 웹 개발이라는 분야를 
              좀 더 전문적으로 배워보고자 직업 능력 개발 훈련 과정인 UI&amp;UX 프론트엔드&#95;react.js <br /> 과정을 수료하였습니다.
              처음으로 접하는 분야이기 때문에 어려움이 있었으나 개발을 하는 과정에서 성취감과 흥미를 더 크게 느낄 수 있었습니다. <br />
              저는 이전 직장을 다니면서 업무상 많은 사람들을 만나고 의사소통을 했던 경험을 통해 의사소통의 중요성을 깨달았습니다. <br />  
              개발이란 혼자만 하는 것이 아닌 많은 사람들과 의견을 나누며 하는 것이 스스로가 성장하는 데에 큰 도움이 된다고 생각합니다. <br />
              변화의 폭이 넓은 IT 분야에 맞춰 꾸준히 공부하고 소통하여 계속해서 성장해가는 개발자가 되도록 하겠습니다.
            </dd>
          </dl>
        </div>
      </div>
    </article>
  )
}
