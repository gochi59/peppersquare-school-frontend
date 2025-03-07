import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

interface Student {
  id: number;
  name: string;
  email: string;
  class: string;
  profileImage: { url: string };
}

const Students: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/students?populate=*")
      .then((response) => setStudents(response.data.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="students-container">
      {students.map((student) => (
        <Card
          key={student.id}
          title={student.name}
          description={student.class}
          imageUrl={`http://localhost:1337${student.profileImage.url}`}
        />
      ))}
    </div>
  );
};

export default Students;
