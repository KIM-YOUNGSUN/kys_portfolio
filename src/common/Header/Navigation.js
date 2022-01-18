import {NavLink} from 'react-router-dom';

export default function Navigation() {
  const navList = [
    {content: "About", href:"about"},
    {content: "Skills", href:"skills"},
    {content: "Project", href:"project"},
    {content: "Contact", href:"contact"}
  ];

  return (
    <nav id="navBox">
      <h2 className='blind'>navigation</h2>
      <ul>
        {navList.map( (nav, idx) => {
          return (
            <li key = {idx}>
              <NavLink
                className={ ({isActive}) => 'box ' +(isActive ? "on" : '') }
                to={nav.href}>{nav.content}</NavLink>
            </li>
          )
        } )}
      </ul>
    </nav>
  )
}
