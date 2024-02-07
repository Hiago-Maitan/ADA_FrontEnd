import { BsFillPeopleFill } from "react-icons/bs";
import { commentsArray } from "../../js/CommentsArray";

function CommentCard() {
  return (
  <>
  {commentsArray.map(data => (
    <section key={data.id} className='comment-card'>
    <div className='first-content'>
      <BsFillPeopleFill size={40}/>
      <div className='top-content'>
        <div className='data-content'>
          <h3>{data.name}</h3>
          <span>{data.date}</span>
        </div>
        <div>
          <hr />
        </div>
      <p>{data.comment}</p>
      </div>
    </div>
  </section> 
  ))}
  </>
   );
}
export default CommentCard;