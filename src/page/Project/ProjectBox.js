
import '../../style/ProjectBox.scss';

export default function ProjectBox() {

  return (
    <article id="projectBox">
      <h2>project</h2>
      <div className="project_area">

        <div className="hermes_part">
          <ul>
            <li>
              <div className='hermes_img'>
              </div>
            </li>
            <dl>
              <dt>hermes</dt>
              <dd>프로젝트 설명</dd>
            </dl>
            <div className="hermes_url">
                <a href="https://hermes-project.vercel.app" target="blank">hermes</a>
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
              <dd>프로젝트 설명</dd>
            </dl>

            <div className="portfolio_url">
                <a href="https://kys-portfolio.vercel.app" target="blank">hermes</a>
            </div>
          </ul>
        </div>
      </div>
    </article>
  )
}
