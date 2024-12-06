// // EventCalendarStyles.js
// import styled from 'styled-components';

// export const EventCalendarContainer = styled.div`
//   display: flex;
//   padding-left: 200px;
// `;

// export const Content = styled.div`
//   flex: 1;
//   padding: 20px;
// `;

// export const CalendarContainer = styled.div`
//   margin-top: 20px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   padding: 20px;
// `;

// export const Events = styled.div`
//   margin-top: 20px;
// `;

// export const Event = styled.div`
//   margin-bottom: 10px;
//   padding: 10px;
//   background-color: #f9f9f9;
//   border-radius: 5px;
// `;

// export const AddEventForm = styled.form`
//   margin-top: 20px;
//   display: flex;
//   align-items: center;
// `;

// export const EventInput = styled.input`
//   flex: 1;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   margin-right: 10px;
// `;

// export const AddEventButton = styled.button`
//   padding: 10px 20px;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// export const ErrorText = styled.p`
//   color: red;
//   margin-top: 10px;
// `;

import styled from "styled-components";

export const EventCalendarContainer = styled.div`
  display: flex;
  padding-left: 200px;
  background: linear-gradient(to right, #e3f2fd, #bbdefb);
  min-height: 100vh;
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  color: #333;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #1565c0;
  }
`;

export const CalendarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  padding: 15px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const DatePickerWrapper = styled.div`
  flex: 1;
  .react-datepicker-wrapper {
    width: 100%;
  }
`;

export const Events = styled.div`
  margin-top: 20px;
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Event = styled.div`
  padding: 10px;
  background-color: #e3f2fd;
  border-radius: 5px;
  margin-bottom: 10px;
  color: #1e88e5;
  font-weight: bold;
`;

export const AddEventForm = styled.form`
  margin-top: 20px;
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const EventInput = styled.input`
  flex: 1;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

export const AddEventButton = styled.button`
  padding: 10px 20px;
  background-color: #1565c0;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0d47a1;
  }
`;

export const ErrorText = styled.p`
  color: red;
  margin-top: 10px;
`;
