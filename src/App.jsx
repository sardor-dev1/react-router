import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
  Outlet,
  NavLink,
} from "react-router-dom";
import "./App.scss";
import { Home, Students, Student, Teacher } from "@pages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <header className="container">
          <nav>
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/student"}>Student</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <main className="container">
          <Outlet />
        </main>

        <Routes>
          <Route path="/*" element={<Home />}>
            <Route path="teacher" element={<Teacher />} />
          </Route>
          <Route path="/student/*" element={<Student />}>
            <Route path=":id" element={<Students />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
