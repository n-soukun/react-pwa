import React from 'react';
import logo from './logo.svg';
import BigBookmark from './components/big-bookmark';

function App() {
  return (
    <div>
      <header className='flex gap-4 items-center p-4 text-xl text-slate-800 border-b border-slate-200'>
        <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} className=' w-6 h-6'/> iU Launcher
      </header>
      <main className='flex'>
        <div className='flex flex-col gap-2 h-[calc(100vh-61px)] p-2 border-r border-slate-200'>
          <a href='https://iu-people.slack.com' target='_blank' className='block p-2 rounded hover:bg-slate-100'>
              <img src={`${process.env.PUBLIC_URL}/img/slack-icon.svg`} alt="" className=' w-8 h-8'/>
          </a>
          <a href='https://gmail.com' target='_blank' className='block p-2 rounded hover:bg-slate-100'>
              <img src={`${process.env.PUBLIC_URL}/img/gmail-icon.svg`} alt="" className=' w-8 h-8'/>
          </a>
        </div>
        <div className='flex gap-4 p-4 flex-wrap flex-1 items-start'>
          <BigBookmark 
            url="https://unipa.i-u.ac.jp/uprx/"
            icon={`${process.env.PUBLIC_URL}/img/logo.svg`}
            screenshot={`${process.env.PUBLIC_URL}/img/unipa-sc.png`}
            name="Unipa iU"/>
          <BigBookmark 
            url="https://classroom.google.com/"
            icon={`${process.env.PUBLIC_URL}/img/classroom-icon.png`}
            screenshot={`${process.env.PUBLIC_URL}/img/classroom-sc.png`}
            name="Google Classroom"/>
        </div>
      </main>
    </div>
  );
}

export default App;
