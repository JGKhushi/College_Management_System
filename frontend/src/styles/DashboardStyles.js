
import styled from "styled-components";

export const AdminDashboardContainer = styled.div`
  display: flex;
  background: linear-gradient(to right, #f5f7fa, #c3cfe2);
  min-height: 100vh;
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: ${({ isOpen }) => (isOpen ? "250px" : "80px")};
  transition: margin-left 0.3s ease;
  color: #333;
`;

export const TopContent = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap; /* Wrap items on smaller screens */
`;

export const BottomContent = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Section = styled.section`
  flex: 1;
  min-width: 300px; /* Adjust to ensure responsiveness */
`;

export const SectionTitle = styled.h2`
  font-size: 26px;
  font-weight: 700;
  color: #444;
  margin-bottom: 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column; /* Change this to column to stack cards vertically */
  padding-left: 240px;
  gap: 30px;
  max-width: 400px; /* Optional: Limit the width to avoid stretching */
`;


export const Card = styled.div`
  background: linear-gradient(to right, #4facfe, #00f2fe);
  color: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex: 1;
  text-align: center;
  border : 2px solid black;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const CardContent = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const CardIcon = styled.div`
  font-size: 36px;
  margin-bottom: 10px;
  color: #fff;
`;

export const StudentDashboardContainer = styled.div`
  display: flex;
  padding-left: 240px;
`;

export const TeacherDashboardContainer = styled.div`
  display: flex;
  padding-left: 240px;
`;
