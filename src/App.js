import Hero from './components/hero';
import Sidebar from './components/sidebar';
import Content from './components/content';
import Navbar from './components/navbar';

function App() {
  return (
    <div className='grid grid-areas-mdlayout grid-cols-mdlayout grid-rows-mdlayout h-full'>
      <Hero />
      <Navbar />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
