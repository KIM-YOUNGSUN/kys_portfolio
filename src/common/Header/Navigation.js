
import {Link} from 'react-scroll'

export default function Navigation() {

  return (
    <nav id="navBox">
      <h2 className='blind'>navigation</h2>
      <div className='navbar'>
        
        <Link 
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          >About
        </Link>

        <Link 
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          >Skills
        </Link>

        <Link 
          activeClass="active"
          to="project"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          >Project
        </Link>

        <Link 
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          >Contact
        </Link>

      </div>
    </nav>
  )
}
