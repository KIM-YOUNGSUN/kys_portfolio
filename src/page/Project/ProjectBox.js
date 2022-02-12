
import '../../style/ProjectBox.scss';

export default function ProjectBox() {

  return (
    <article id="projectBox">
      <h2>project</h2>
      <div className="project_area">

        <div className="hermes_part">
          <ul>
            <li>
              <div className='hermes_img'></div>
            </li>
            <dl>
              <dt>hermes</dt>
              <dd>
                Html5, Scss를 이용하여 반응형 레이아웃 제작 <br />
                JavaScript를 통해 슬라이드 및 클릭 기능 등 구현 <br />
                메인, 로그인(LOGIN), 장바구니(CART 아이콘),<br /> 회사소개(ABOUT) 페이지 제작
              </dd>
            </dl>
            <div className="hermes_url">
                <a href="https://kim-youngsun.github.io/hermes_project/" target="blank">자세히보기</a>
            </div>
          </ul>
        </div>

        <div className='portfolio_part'>
          <ul>
            <li>
              <div className='portfolio_img'> 
              </div>
            </li>
            <dl>
              <dt>portfolio</dt>
              <dd>
                React를 이용하여 개인 포트폴리오 페이지 제작
              </dd>
            </dl>

            <div className="portfolio_url">
                <a href="https://kim-youngsun.github.io/kys_portfolio/" target="blank">자세히보기</a>
            </div>
          </ul>
        </div>
      </div>
    </article>
  )
}
