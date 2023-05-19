import BigBookmark from './components/big-bookmark';
import SideAppBar from './components/SideAppBar';

function App() {

  const sideAppBarData = [
    {
      url: "https://iu-people.slack.com",
      img: `${process.env.PUBLIC_URL}/img/slack-icon.svg`
    },
    {
      url: "https://gmail.com",
      img: `${process.env.PUBLIC_URL}/img/gmail-icon.svg`
    }
  ]

  return (
    <div className='min-h-screen bg-slate-50'>
      <header className='sticky top-0 left-0 z-50 flex gap-4 items-center p-4 text-xl text-slate-800 bg-white border-b border-slate-200'>
        <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} className=' w-6 h-6'/> iU Launcher
      </header>
      <div>
        <SideAppBar data={sideAppBarData}/>
        <div className='grid grid-cols-1 auto-rows-min gap-2 p-4 sm:ml-16 md:grid-cols-2 xl:grid-cols-3'>
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
      </div>
    </div>
  );
}

export default App;
