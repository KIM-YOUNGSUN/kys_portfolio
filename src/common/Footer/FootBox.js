import {Link} from 'react-scroll';
import '../../style/FootBox.scss';
import {MdOutlineKeyboardArrowUp} from "react-icons/md";
import {FaRegSmile} from "react-icons/fa";


export default function FootBox() {
  
  return (
    <footer id="footBox">
      <div className='foot_area'>
        
          <Link 
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            ><MdOutlineKeyboardArrowUp className="btn" />
          </Link>
    
      <p>thank you for watching!</p>
      <p>읽어주셔서 감사합니다.<FaRegSmile className="smile_icon"/></p>
      
      

      
      </div>
    </footer>
  )
}
