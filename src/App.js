import React from 'react';
import logo from './logo.svg';
import './App.css';

const Nav = () => (
  <nav>
    <a className='logo' href='#logo'>
      <i className='fas fa-bug' />
    </a>
    <input
      type='text'
      placeholder='Search'
      name='search'
      className='searchBox'
    />
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
      <div className='leftSidebar'>
        <a className='usersName' href='#users'>
          Jane Doe
        </a>
        <a className='wallPosts' href='#wall'>
          Wall Posts
        </a>
        <a className='messenger' href='#messenger'>
          Messenger
        </a>
        <p>
          <strong>Explore</strong>
        </p>
        <a className='groups' href='#groups'>
          Groups
        </a>
        <a className='events' href='#events'>
          Events
        </a>
      </div>
      <div className='rightSidebar'>
        <a className='friend1' href='#friend1'>
          John Smith
        </a>
        <a className='friend2' href='#friend1'>
          Sally Jones
        </a>
        <a className='friend3' href='#friend1'>
          Mary Smith
        </a>
        <a className='friend4' href='#friend1'>
          Ralph Bear
        </a>
        <a className='friend5' href='#friend1'>
          Mortimer Smith
        </a>
        <a className='friend6' href='#friend1'>
          Sherman Bear
        </a>
        <a className='friend7' href='#friend1'>
          Sarah Doe
        </a>
        <a className='friend8' href='#friend1'>
          John Doe
        </a>
      </div>
    </>
  );
}

export default App;
