import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import "./index.scss";

const Index = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStudentById() {
      setLoading(true);
      const response = await fetch(
        `https://famous-people-v4sn.onrender.com/people/${id}`
      );
      const data = await response.json();
      setStudent(data);
      setLoading(false);
    }
    fetchStudentById();
  }, [id]);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={"./student"}>Student</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="card">
          <img
            className="card__img"
            src={student && student.image_url}
            alt={student && student.name}
          />
          <div className="card__right">
            <h2>{student && student.name}</h2>
            <p>
              Famous for: <span>{student && student.famous_for}</span>
            </p>
            <p>
              Country: <span>{student && student.country}</span>
            </p>
            <p>
              Year born: <span>{student && student.year_born}</span>
            </p>
            <p>
              Background info: <span>{student && student.background_info}</span>
            </p>
          </div>
        </div>
      )}
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default Index;
