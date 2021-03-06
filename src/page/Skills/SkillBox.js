import {AiFillHtml5} from "react-icons/ai";
import {DiCss3} from "react-icons/di";
import {DiSass} from "react-icons/di";
import {SiJavascript} from "react-icons/si";
import {DiReact} from "react-icons/di";
import {AiFillGithub} from "react-icons/ai";
import '../../style/SkillBox.scss';


export default function SkillBox() {
  return (
    <article id="skillBox">
      <h2>skills</h2>
      <div className="skill_area_01">
        <div className='html_part'>
          <AiFillHtml5 className="html_icon" />
          <h3>html</h3>
          <ul>
            <li><span className="blind">indi_01</span></li>
            <li><span className="blind">indi_02</span></li>
            <li><span className="blind">indi_03</span></li>
            <li><span className="blind">indi_04</span></li>
            <li><span className="blind">indi_05</span></li>
          </ul>
        </div>

        <div className='css_part'>
          <DiCss3 className="css_icon" />
          <h3>css</h3>
          <ul>
            <li><span className="blind">indi_01</span></li>
            <li><span className="blind">indi_02</span></li>
            <li><span className="blind">indi_03</span></li>
            <li><span className="blind">indi_04</span></li>
            <li><span className="blind">indi_05</span></li>
          </ul>
        </div>

        <div className='scss_part'>
          <DiSass className="scss_icon" />
          <h3>scss</h3>
          <ul>
            <li><span className="blind">indi_01</span></li>
            <li><span className="blind">indi_02</span></li>
            <li><span className="blind">indi_03</span></li>
            <li><span className="blind">indi_04</span></li>
            <li><span className="blind">indi_05</span></li>
          </ul>
        </div>
      </div>

      <div className="skill_area_02">
        <div className='js_part'>
          <SiJavascript className="js_icon" />
          <h3>javascript</h3>
          <ul>
            <li><span className="blind">indi_01</span></li>
            <li><span className="blind">indi_02</span></li>
            <li><span className="blind">indi_03</span></li>
            <li><span className="blind">indi_04</span></li>
            <li><span className="blind">indi_05</span></li>
          </ul>
        </div>

        <div className='react_part'>
          <DiReact className="react_icon" />
          <h3>react</h3>
          <ul>
            <li><span className="blind">indi_01</span></li>
            <li><span className="blind">indi_02</span></li>
            <li><span className="blind">indi_03</span></li>
            <li><span className="blind">indi_04</span></li>
            <li><span className="blind">indi_05</span></li>
          </ul>
        </div>

        <div className='git_part'>
          <AiFillGithub className="git_icon" />
          <h3>git</h3>
          <ul>
            <li><span className="blind">indi_01</span></li>
            <li><span className="blind">indi_02</span></li>
            <li><span className="blind">indi_03</span></li>
            <li><span className="blind">indi_04</span></li>
            <li><span className="blind">indi_05</span></li>
          </ul>
        </div>
      </div>

    </article>
  )
}
