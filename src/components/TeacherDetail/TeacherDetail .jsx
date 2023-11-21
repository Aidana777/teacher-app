// TeacherDetail.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './detail.css'; // Assuming you have a separate CSS file

const TeacherDetail = ({ data }) => {
  const { id } = useParams();
  const teacher = data.find((teacher) => teacher.id.toString() === id);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleAddComment = () => {
    console.log(`Comment for teacher ${teacher.id}: ${comment}`);
    setComments([...comments, comment]);
    setComment('');
  };

  if (!teacher) {
    return <div>Teacher not found</div>;
  }

  return (
    <div className="teacher-detail-card">
      <img className="teacher-detail-img" src={teacher.img} alt={teacher.ФИО} />
      <div className="teacher-detail-info">
        <h2 className="teacher-detail-name">{teacher.ФИО}</h2>
        <p className="teacher-detail-univers">{teacher.УНИВЕРСИТЕТ}</p>
        <p className="teacher-detail-faculty">{teacher.Направление}</p>
        <p className="teacher-detail-rating">{teacher.rating}</p>

        {/* Comment Section */}
        <div className="comment-section">
          <textarea
            className="comment-input"
            placeholder="Add your comment..."
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
          <button className="comment-save-button" onClick={handleAddComment}>
            Save
          </button>

          {/* Display Comments */}
         
        </div>
        <div className="comment-list">
            {comments.map((comment, index) => (
              <p key={index} className="comment-text">{comment}</p>
            ))}
          </div>
          {/* rating two img change */}
          
      </div>
    </div>
  );
};

export default TeacherDetail;
