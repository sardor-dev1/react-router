import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./index.scss";

const Index = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStudents() {
      setLoading(true);
      const response = await fetch(
        "https://famous-people-v4sn.onrender.com/people"
      );
      const data = await response.json();
      setStudents(data);
      setLoading(false);
      console.log(data);
    }
    fetchStudents();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="student__list" style={{ color: "blue" }}>
          {students.map((s) => (
            <li className="student__list__item" key={s.id}>
              <Link to={`${s.id}`}>{s.name}</Link>
            </li>
          ))}
        </ul>
      )}
      <Outlet />
    </>
  );
};

export default Index;
