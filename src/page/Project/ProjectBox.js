
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
                html5, scss를 이용하여 반응형 레이아웃 제작 <br />
                javascript를 통해 슬라이드 및 클릭 기능 등 구현 <br />
                메인, 로그인, 장바구니, 회사 소개 페이지 제작
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
                react를 이용하여 개인 포트폴리오 페이지 제작
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
