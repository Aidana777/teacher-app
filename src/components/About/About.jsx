import React from 'react'
import './about.css'
const About = () => {
  return (
    <div>
      <div className="textAbout">
        <strong className="boldText">Что такое MyPrepod.ru?</strong>
        <p className="muddium">MyPrepod (майпрепод) – это веб-сайт, где студенты оценивают преподавателей.</p>
        <p className="muddium">Сайт был запущен 6 ноября 2017 год</p>
        <strong className="boldText">Что можно сделать на MyPrepod.ru?</strong>
        <p className="muddium">Можно оставить текстовый отзыв, поставить оценку в рейтинг. Без регистрации.</p>
        <p className="muddium">Рейтинг на странице преподавателя является средним арифметическим баллов от студентов.</p>
        <strong className="boldText">Можно ли помочь проекту?</strong>
        <p className="muddium">Да, например можно:</p>
        <p className="muddium"> 1.Кинуть ссылку в беседу своей группы.</p>
        <p className="muddium">2.Не пользоваться найденными уязвимостями сайта.</p>

      </div>
    </div>
  )
}

export default About