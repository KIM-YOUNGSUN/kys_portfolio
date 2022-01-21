import '../../style/ContactBox.scss';
import { Link } from 'react-scroll';

export default function ContactBox() {
  return (
    <article id="contactBox">
      <h2>contact</h2>
      <div className='contact_area'>
        <p>이메일 주소</p>
        <p>깃허브</p>
        <p>휴대폰 번호</p>
      </div>
    </article>
  )
}
