import React from 'react';

/**
 * "Вешаем" событие (newDate) на кнопку
 * Экспортируем компонент DateRender в vendor.js
 */

class DateRender extends React.Component {
    render() {
        return (
            <div className={'date_block'}>
                <button onClick={newDate}>Нажмите, чтобы узнать время</button>
                <div id={'output_date'}>Дата и время...</div>
            </div>
        );
    }
}

function newDate() {
    let date = new Date();
    let dateBlock = document.createElement('div');
    document.querySelector('#output_date').innerHTML = '';
    dateBlock.innerHTML = date;
    document.querySelector('#output_date').appendChild(dateBlock);
}

export {DateRender, newDate};