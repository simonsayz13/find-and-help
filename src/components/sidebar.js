import Filter from './filter';

const Sidebar = () => {
  return (
    <aside className='hidden md:block grid-in-sidebar bg-slate-200 p-4 ml-6 rounded-tl-2xl'>
      <Filter />
    </aside>
  );
};

export default Sidebar;
