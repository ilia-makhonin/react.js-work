import React from 'react';

export default class AddArticle extends React.Component {
    render() {
        return (<div className={"send_article"}>
                <h2 className={"form_header"}>Напишите свою статью</h2>
                <form action={""} method={"POST"} id={"form_article"}>
                    <label>
                        <input type={"text"} className={"user_data_form"} id={"user_name"} placeholder={"Ваше имя"}/>
                    </label>
                    <label>
                        <input type={"text"} className={"user_data_form"} id={"topic_of_the_article"} placeholder={"Тема"}/>
                    </label>
                    <label>
                        <textarea id={"text_article"}></textarea>
                    </label>
                    <input type={"submit"} id={"send_data"} value={"Отправить"}/>
                </form>
            </div>

        );
    }
}