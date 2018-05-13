import React from 'react';
import ReactDOM from 'react-dom';
import {DateRender, newDate} from "./app/components/script";

/**
 * @class App - информация о разработчике (второе задание)
 * @DateRender - компонент для отображения даты и времени (третье, четвёртое и пятое задание)
 * @newDate - функция для создания блока с датой
 */

class App extends React.Component {
    render() {
        return (
            <div className={'wrap'}>
                <h1>Информация о разработчике</h1>
                <h2>Основная информация:</h2>
                <div className={'about_me'}>
                    <p>ФИО: <span>Иванов Иван Иванович</span></p>
                    <p>Место работы: <span>Компания...</span></p>
                    <h3>Владение технологиями:</h3>
                    <ul className={'skills_list'}>
                        <li>ECMAScript2015</li>
                        <li>jQuery</li>
                        <li>ReactJS</li>
                        <li>VueJS</li>
                        <li>GIT</li>
                        <li>Webpack</li>
                        <li>Gulp</li>
                    </ul>
                </div>
                <h2>Дополнительная информация:</h2>
                <div className={'other_me'}>
                    <p>Опыт FrontEnd разработки: <span>3 года</span></p>
                    <p>Телефон: <span>+7 (999) 437-32-89</span></p>
                    <h3>Ключевые навыки:</h3>
                    <ul className={'skills_list'}>
                        <li>Вёрстка сайтов с использованием HTML5 и CSS3</li>
                        <li>Разработка с применением Twitter Bootstrap</li>
                        <li>Делегирование событий и управление структурой DOM</li>
                        <li>Опыт написания Ajax-запросов</li>
                        <li>Разработка профессионального frontend-а на ReactJS, Flux, Redux</li>
                    </ul>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));

ReactDOM.render(<DateRender/>, document.querySelector('#date'));