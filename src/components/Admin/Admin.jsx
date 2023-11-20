import React, { useState } from 'react';
import './admin.css';

const Admin = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleTextareaChange = (event) => {
    setComment(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  const handleTextareaClick = () => {
    setIsExpanded(true);
  };

  return (
    <div className="adminBlock">
      <div className="adminContent">
        <div className="imgAdmin">
          <img
            className='adminImg'
            src="https://myprepod.ru/img/20171105221233259.jpg"
            alt=""
          />
        </div>
        <div className="infoAdmin">
          <h3>Админ MyPrepod</h3>
          <h4>Link – ответы Админа. Админ не всегда отвечает, но все читает.</h4>
        </div>
      </div>

      <div className="commentField">
        <textarea
          className={`comment-form ${isExpanded ? 'expanded' : ''}`}
          cols="80"
          rows="5"
          value={comment}
          onChange={handleTextareaChange}
          onClick={handleTextareaClick}
        ></textarea>
        {isExpanded && (
          <button className="submit-button" onClick={handleFormSubmit}>
            Отправить
          </button>
        )}
      </div>

      {comments.length > 0 && (
        <div className="comments">
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Admin;
