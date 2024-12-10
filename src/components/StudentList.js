import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import studentData from "./StudentList.json"; // Asegúrate de que el archivo esté en la ubicación correcta
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Registrar los elementos de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(studentData); // Asignar los datos del JSON directamente
  }, []);

  // Componente para mostrar el gráfico de género
  const GenderPieChart = () => {
    // Contar alumnos por género
    const genderCounts = studentData.reduce(
      (acc, student) => {
        if (student.sexo === "Masculino") acc.male += 1;
        if (student.sexo === "Femenino") acc.female += 1;
        return acc;
      },
      { male: 0, female: 0 }
    );

    // Datos para el gráfico
    const data = {
      labels: ["Masculino", "Femenino"],
      datasets: [
        {
          data: [genderCounts.male, genderCounts.female],
          backgroundColor: ["#36A2EB", "#FF6384"], // Colores para cada segmento
          hoverBackgroundColor: ["#4BC0C0", "#FF9F40"],
        },
      ],
    };

    return (
      <div className="col-12 col-md-6 mb-4">
        <h3 className="text-center mb-4">Distribución por Género</h3>
        <Pie data={data} />
      </div>
    );
  };

  // Componente para mostrar el gráfico de distribución por edad
  const AgePieChart = () => {
    // Contar alumnos por edad
    const ageCounts = students.reduce((acc, student) => {
      const ageGroup = `${student.edad} años`; // Formato de grupo de edad
      if (acc[ageGroup]) {
        acc[ageGroup] += 1;
      } else {
        acc[ageGroup] = 1;
      }
      return acc;
    }, {});

    // Datos para el gráfico de edad
    const data = {
      labels: Object.keys(ageCounts), // Las edades como etiquetas
      datasets: [
        {
          data: Object.values(ageCounts), // Cantidad de estudiantes por edad
          backgroundColor: ["#FF9F40", "#FF6384", "#36A2EB", "#FFCD56", "#4BC0C0"], // Colores para cada segmento
          hoverBackgroundColor: ["#FFB74D", "#FF7D79", "#4A90E2", "#FFEB3B", "#36C7D1"],
        },
      ],
    };

    return (
      <div className="col-12 col-md-6 mb-4">
        <h3 className="text-center mb-4">Distribución por Edad</h3>
        <Pie data={data} />
      </div>
    );
  };

  return (
    <div className="container">
      <div class="pt-5">
        <h1 className="text-center bb2">Listado de Alumnos</h1>
      </div>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>DNI</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.nombre}</td>
              <td>{student.apellido}</td>
              <td>{student.edad}</td>
              <td>{student.dni}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="row">
        <GenderPieChart /> {/* Componente para mostrar el gráfico de género */}
        <AgePieChart /> {/* Componente para mostrar el gráfico de edad */}
      </div>
    </div>
  );
};

export default StudentList;
