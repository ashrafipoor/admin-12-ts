import Menu from "./Menu";
import Logo from "./Logo";
import Profile from "./Profile";

const Aside = () => {
  return (
    <div className="bg-gray-700 pl-4 pt-4 pb-4 pr-4">
      <Logo />
  
      <Profile />
      <div>
        
        <input className="mt-4 rounded-md w-full pt-2 pb-2 pl-2 bg-gray-600" placeholder="Search"/>
        <button className="block bg-blue-600 mt-4 w-full pt-2 pb-2 text-white rounded-md">Dashboard</button>
      </div>
      <Menu />
    </div>
  );
};

export default Aside;
