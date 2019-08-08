import React from 'react';
import logo from './logo.svg';
import './App.css';

const Nav = () => (
  <nav>
    <a className='logo' href='#logo'>
      <i className='fas fa-bug' />
    </a>
    <input type='text' placeholder='Search' name='search' />
    <button type='submit'>
      <i className='fas fa-search' />
    </button>
    <a className='name' href='#name'>
      Jane Doe
    </a>
    <a className='home' href='#home'>
      Home
    </a>
    <a className='friends' href='#friends'>
      Find a Friend
    </a>
    <a className='create' href='#create'>
      Create
    </a>
    <a className='friend' href='#requests'>
      <i className='fas fa-users' />
    </a>
    <a className='message' href='#messages'>
      <i className='far fa-comment-dots' />
    </a>
    <a className='notify' href='#notify'>
      <i className='far fa-bell' />
    </a>
    <a className='help' href='#help'>
      <i className='far fa-question-circle' />
    </a>
  </nav>
);

function App() {
  return (
    <>
      <Nav />
    </>
  );
}

export default App;
