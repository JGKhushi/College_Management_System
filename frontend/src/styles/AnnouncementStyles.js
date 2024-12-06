// // AnnouncementStyles.js

import styled from "styled-components";

export const AnnouncementContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f5f7fa;
  padding-left: 240px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`;

export const SidebarContainer = styled.div`
  flex: 0 0 250px; /* Sidebar width */
  background-color: #343a40;
  color: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);e

  @media screen and (max-width: 768px) {
    flex: 0 0 auto;
    width: 100%;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  margin: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const AnnouncementHeader = styled.h1`
  font-size: 28px;
  color: #007bff;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  border-bottom: 2px solid #007bff;
  padding-bottom: 10px;
`;

export const AnnouncementList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const AnnouncementItem = styled.li`
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const AnnouncementTitle = styled.h3`
  font-size: 20px;
  color: #343a40;
  margin-bottom: 5px;
`;

export const AnnouncementContent = styled.p`
  font-size: 16px;
  color: #6c757d;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ced4da;
  border-radius: 8px;
  resize: none;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.25);
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  font-weight: bold;
  color: #495057;
  margin-bottom: 5px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #495057;
  margin-bottom: 15px;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const AnnouncementForm = styled.form`
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    padding: 15px;
  }
`;
