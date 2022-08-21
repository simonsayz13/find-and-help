import Filter from './filter';

const Sidebar = () => {
  return (
    <aside className='hidden md:block grid-in-sidebar bg-slate-200 h-screen p-4'>
      <Filter />
    </aside>
  );
};

export default Sidebar;
