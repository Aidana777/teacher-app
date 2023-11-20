import React, { useState } from 'react';
import './home.css';

const Home = () => {
  const universitiesInBishkek = ["ОБСЕ", "AУЦА ", "Манас", "BSU", "Ала-Тоо", "УЦА", "Slavic ", "Другой ВУЗ"];
  const [isAddTeacherFormVisible, setIsAddTeacherFormVisible] = useState(false);
  const [teacherNotFound, setTeacherNotFound] = useState(false);
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [newTeacherData, setNewTeacherData] = useState({
    name: '',
    surname: '',
    patronymic: '',
    university: '',
    position: '',
    photo: null,
  });

  const handleUniversityButtonClick = (university) => {
    // Implement the logic to check if the teacher for the selected university is in the database
    const teacherFound = false; // Replace with actual logic

    if (teacherFound) {
      setTeacherNotFound(false);
    } else {
      setTeacherNotFound(true);
      setIsAddTeacherFormVisible(true);
      setSelectedUniversity(university);
    }
  };

  const handleAddTeacherSubmit = (event) => {
    event.preventDefault();
    // Implement the logic to handle the submission of the new teacher form
    // You may want to send the data to the server, update the database, etc.
    console.log('New teacher data:', newTeacherData);
    setIsAddTeacherFormVisible(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTeacherData({
      ...newTeacherData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const photoFile = event.target.files[0];
    setNewTeacherData({
      ...newTeacherData,
      photo: photoFile,
    });
  };

  return (
    <div>
      <div className='searchFillter'>
        <input
          className='search'
          type="text"
          placeholder={`Кого ищем в ${selectedUniversity}`}
        />
        <div className="btnImg">
          <img className="btnImg" src="https://myprepod.ru/icons/search_new.png" alt="SearchBtn" />
        </div>
      </div>

      {/* Buttons for Best Universities in Bishkek */}
      <div className="universities">
        {universitiesInBishkek.map((university, index) => (
          <button
            key={index}
            className="universityButton"
            onClick={() => handleUniversityButtonClick(university)}
          >
            {university}
          </button>
        ))}
      </div>

      {/* Teacher Not Found Message */}
      {teacherNotFound && (
        <div className="teacherNotFoundMessage">
          No teacher found for the selected university. You can add a new teacher:
        </div>
      )}
      {isAddTeacherFormVisible && (
        <div className="addTeacher">
          <form onSubmit={handleAddTeacherSubmit}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={newTeacherData.name}
              onChange={handleInputChange}
              required
            />
            <label>Surname:</label>
            <input
              type="text"
              name="surname"
              value={newTeacherData.surname}
              onChange={handleInputChange}
              required
            />
            <label>Patronymic:</label>
            <input
              type="text"
              name="patronymic"
              value={newTeacherData.patronymic}
              onChange={handleInputChange}
              required
            />
            <label>University:</label>
            <select
              name="university"
              value={newTeacherData.university}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select University</option>
              {universitiesInBishkek.map((university, index) => (
                <option key={index} value={university}>
                  {university}
                </option>
              ))}
            </select>
            <label>Position:</label>
            <input
              type="text"
              name="position"
              value={newTeacherData.position}
              onChange={handleInputChange}
              required
            />
            <label>Attach Photo:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
            <button type="submit">Добавить</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Home;
