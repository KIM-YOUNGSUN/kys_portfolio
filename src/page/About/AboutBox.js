import '../../style/AboutBox.scss';

export default function AboutBox() {
  return (
    <article id="aboutBox">
      <h2>about</h2>
      <div className="about_area">
        <div className="img_part"></div>
        <div className="text_part">
          <dl>
            <dt>성장과 소통을 중시하는 김영선입니다.</dt>
            <dd>자기소개 내용</dd>
          </dl>
        </div>
      </div>
    </article>
  )
}
