import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

interface Teacher {
  id: number;
  name: string;
  subject: string;
  profileImage: { url: string };
}

const Teachers = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/teachers?populate=*")
      .then((response) => setTeachers(response.data.data))
      .catch((error) => console.error(error));
  }, []);

  console.log(teachers);
  return (
    <div className="teachers-container">
      {teachers.map((teacher) => (
        <Card
          key={teacher.id}
          title={teacher.name}
          description={teacher.subject}
          imageUrl={`http://localhost:1337${teacher.profileImage?.url || "/default-image.png"}`}
        />
      ))}
    </div>
  );
};

export default Teachers;
