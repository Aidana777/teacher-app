// Home.js
import React, { useState } from 'react';
import Search from '../Search/Search'; // Assuming the Search component is in the same directory
import './home.css';

const Home = ({ data }) => {
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
  const [searchResults, setSearchResults] = useState([]);

  const handleUniversityButtonClick = (university) => {
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

  const handleSearch = (searchValue) => {
    console.log('Search value:', searchValue);
    const results = data.filter((teacher) =>
      teacher.ФИО.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      {/* Use the Search component */}
      <Search placeholder={`Кого ищем в ${selectedUniversity}`} onSearch={handleSearch} />

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

      {/* Display search results */}
      <div>
        <div className="teacher-cards">
          {searchResults.map((teacher) => (
            <div key={teacher.id} className="teacher-card">
              <img className="teacher-img" src={teacher.img} alt={teacher.ФИО} />
              <div className="teacher-info">
                <p className="techName">{teacher.ФИО}</p>
                <p className="techUnivers">{teacher.УНИВЕРСИТЕТ}</p>
                <p className="techFacultet">{teacher.Направление}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
