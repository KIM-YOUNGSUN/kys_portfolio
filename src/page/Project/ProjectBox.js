
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
              <dd>
                <a href="https://hermes-project.vercel.app" target="blank">hermes</a>

              </dd>
            </dl>
          </ul>
        </div>

        <div className='portfolio_part'>
          <ul>
            <li>
              <a href="https://kys-portfolio.vercel.app" target="blank">
                <span className='blind'>portfolio</span>
              </a>
            </li>
            <dl>
              <dt>portfolio</dt>
              <dd>프로젝트 설명</dd>
            </dl>
          </ul>
        </div>
      </div>
    </article>
  )
}
