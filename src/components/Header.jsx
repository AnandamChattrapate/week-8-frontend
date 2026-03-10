import { NavLink } from "react-router";
const Header = () => {
    return ( 
        <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        <h1 className="">
         User-demo
        </h1>
        
        <nav>
          <ul className="flex gap-4 items-center">
            <li>
              <NavLink to="" className={({isActive})=>isActive?"text-white bg-blue-600 px-4 py-2 rounded-md":""}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/adduser" className={({isActive})=>isActive?"text-white bg-blue-600 px-4 py-2 rounded-md":""}>
                Add user
              </NavLink>
            </li>

            <li>
              <NavLink to="/user-list" className={({isActive})=>isActive?"text-white bg-blue-600 px-4 py-2 rounded-md":""}>
                users-List 
              </NavLink>
            </li>
          </ul>
        </nav>

      </div>
    </header>
     );
}
 
export default Header;