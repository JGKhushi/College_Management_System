// Performance.js
import React from 'react';
import Sidebar from './Sidebar';
import {
  PerformanceContainer,
  Content,
  PerformanceContent,
  PerformanceHeader,
  SchoolPerformance,
  IndividualPerformance,
} from '../../styles/PerformanceStyles'; 

const Performance = () => {
  // Sample data for school performance
  const schoolPerformanceData = {
    averageScore: 92.5,
    totalStudents: 3,
  };

  // Sample data for individual student performance
  const individualPerformanceData = [
    { id: 1, name: 'Khushi Nema', score: 90 },
    { id: 2, name: 'Shreya Sharama', score: 95 },
    { id: 3, name: 'Charulata Chadokar', score: 92 },
  ];

  return (
    <PerformanceContainer>
      <Sidebar /> {/* Include the Sidebar component */}
      <Content>
        <PerformanceContent>
          <PerformanceHeader>College Performance</PerformanceHeader>
          <SchoolPerformance>
            <p>Average Score: {schoolPerformanceData.averageScore}</p>
            <p>Total Students: {schoolPerformanceData.totalStudents}</p>
          </SchoolPerformance>
          <PerformanceHeader>Individual Performance</PerformanceHeader>
          <IndividualPerformance>
            {individualPerformanceData.map((student) => (
              <p key={student.id}>
                {student.name}: {student.score}
              </p>
            ))}
          </IndividualPerformance>
        </PerformanceContent>
      </Content>
    </PerformanceContainer>
  );
};

export default Performance;
