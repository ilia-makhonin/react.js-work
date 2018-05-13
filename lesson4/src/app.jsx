import React from 'react';
import ReactDOM from 'react-dom';
import BlogLayout from './app/layouts/BlogLayout';

class App extends React.Component {
    render() {
        return <BlogLayout/>;
    }

    componentDidMount() {
        alert('Hello, Stranger!');
    }
}

const app = document.getElementById('app');

ReactDOM.render(<App/>, app);