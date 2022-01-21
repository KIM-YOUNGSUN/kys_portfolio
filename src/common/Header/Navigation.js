import {NavLink} from 'react-router-dom';
import {Link} from 'react-scroll'

export default function Navigation() {
  // const navList = [
  //   {content: "About", href:"about"},
  //   {content: "Skills", href:"skills"},
  //   {content: "Project", href:"project"},
  //   {content: "Contact", href:"contact"}
  // ];

  return (
    <nav id="navBox">
      <h2 className='blind'>navigation</h2>
      <div className='navbar'>
        <Link 
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          >About</Link>
        {/* <li>about</li> */}
        <Link 
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          >Skills</Link>
        {/* <li>skills</li> */
        <Link 
          activeClass="active"
          to="project"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          >Project</Link>}
        {/* <li>project</li> */}
        <Link 
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          >Contact</Link>
        {/* <li>contact</li> */}
      </div>
    </nav>
  )
}
