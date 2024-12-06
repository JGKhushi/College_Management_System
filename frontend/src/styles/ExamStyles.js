// ExamStyles.js
import styled from 'styled-components';

export const ExamContainer = styled.div`
  display: flex;
  padding-left: 240px;
`;

export const SidebarContainer = styled.div`
  flex: 0 0 250px;
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

export const ExamHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ExamForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  padding: 8px;
  margin-bottom: 20px;
`;

export const AddButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ExamResultsContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

export const ExamSubject = styled.h3`
  margin-bottom: 10px;
`;

export const ExamResult = styled.p`
  color: #555;
  margin-bottom: 10px;
`;

export const ExamChartContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;
// import styled from "styled-components";

// export const ExamContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
//   background-color: #f8f9fa;
// `;

// export const SidebarContainer = styled.div`
//   flex: 0 0 250px;
//   background-color: #343a40;
//   color: #fff;
// `;

// export const Content = styled.div`
//   flex: 1;
//   padding: 40px 20px;
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// export const ExamHeader = styled.h1`
//   font-size: 32px;
//   font-weight: bold;
//   color: #007bff;
//   text-align: center;
//   margin-bottom: 30px;
// `;

// export const ExamResultsContainer = styled.div`
//   background-color: #fff;
//   border-radius: 10px;
//   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
//   padding: 30px;
//   margin-bottom: 20px;
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: scale(1.02);
//   }
// `;

// export const ExamSubject = styled.h3`
//   font-size: 20px;
//   color: #343a40;
//   margin-bottom: 10px;
// `;

// export const ExamResult = styled.p`
//   font-size: 16px;
//   color: #6c757d;
//   margin-bottom: 20px;
// `;

// export const ExamChartContainer = styled.div`
//   width: 100%;
//   max-width: 600px;
//   margin: 30px auto;
// `;

// export const AddButton = styled.button`
//   padding: 12px 24px;
//   background-color: #28a745;
//   color: #fff;
//   border: none;
//   border-radius: 6px;
//   font-size: 16px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
//   align-self: center;

//   &:hover {
//     background-color: #218838;
//   }
// `;
