import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home";
import UserList from "./components/UsersList";
import User from "./components/User";
import RootLayout from "./components/RootLayout";
import AddUser from "./components/AddUser";

function App() {

  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "user-list",
          element: <UserList />
        },
        {
          path: "user",
          element: <User />
        },
        {
          path: "adduser",
          element: <AddUser />
        }
      ]
    }
  ]);

  return <RouterProvider router={routerObj} />;
}

export default App;