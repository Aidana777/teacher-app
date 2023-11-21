
import { Link } from 'react-router-dom';
import data from '../../db.json';
import './teachersList.css';

const TeachersList = () => {
  return (
    <div>
      <h2>Teachers List</h2>
      <div className='contentTech'>
        {data.map((teacher) => (
          <div className="cards" key={teacher.id}>
            <Link to={`/teacher/${teacher.id}`}>
              <div className="teacherImg">
                <img className='teacherImg' src={teacher.img} alt={teacher.ФИО} />
              </div>
              <div className="infoTech">
                <p className='techName'>{teacher.ФИО}</p>
                <p className='techUnivers'>{teacher.УНИВЕРСИТЕТ}</p>
                <p className='techFacultet'>{teacher.Направление}</p>
                <div className="rating">
                  <p>{teacher.rating}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeachersList;
