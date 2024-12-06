import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaUsers,
  FaChalkboardTeacher,
  FaBook,
  FaCalendarAlt,
  FaClipboardList,
  FaChartBar,
  FaCog,
  FaBars,
  FaTimes,
  FaBullhorn,
  FaQuestionCircle
} from 'react-icons/fa';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: #2c3e50;
  color: white;
  transition: width 0.3s ease;
  width: ${({ $isOpen }) => ($isOpen ? '250px' : '80px')};
  overflow-x: hidden;
  z-index: 1000;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ $isOpen }) => ($isOpen ? 'space-between' : 'center')};
  padding: 20px;
  background-color: #34495e;
`;

const Logo = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  font-size: 20px;
  font-weight: bold;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${({ $active }) => ($active ? 'rgba(52,152,219,0.2)' : 'transparent')};
  
  &:hover {
    background-color: rgba(52,152,219,0.1);
  }
`;

const NavIcon = styled.div`
  margin-right: ${({ $isOpen }) => ($isOpen ? '15px' : '0')};
  display: flex;
  align-items: center;
`;

const NavText = styled.span`
  white-space: nowrap;
  display: ${({ $isOpen }) => ($isOpen ? 'inline' : 'none')};
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('dashboard');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    {
      id: 'dashboard',
      icon: <FaTachometerAlt />,
      text: 'Dashboard',
      path: '/admin/dashboard'
    },
    {
      id: 'classes',
      icon: <FaBook />,
      text: 'Classes',
      path: '/admin/classes'
    },
    {
      id: 'students',
      icon: <FaUsers />,
      text: 'Students',
      path: '/admin/students'
    },
    {
      id: 'teachers',
      icon: <FaChalkboardTeacher />,
      text: 'Teachers',
      path: '/admin/teachers'
    },
    {
      id: 'assignments',
      icon: <FaClipboardList />,
      text: 'Assignments',
      path: '/admin/assignments'
    },
    {
      id: 'performance',
      icon: <FaChartBar />,
      text: 'Performance',
      path: '/admin/performance'
    },
    {
      id: 'events',
      icon: <FaCalendarAlt />,
      text: 'Events',
      path: '/admin/events'
    },
   
    {
      id: 'announcements',
      icon: <FaBullhorn />,
      text: 'Announcements',
      path: '/admin/announcements'
    },
    {
      id: 'settings',
      icon: <FaCog />,
      text: 'Settings',
      path: '/admin/settings'
    }
  ];

  return (
    <SidebarContainer $isOpen={isOpen}>
      <SidebarHeader $isOpen={isOpen}>
        {isOpen && <Logo $isOpen={isOpen}>College Admin</Logo>}
        <ToggleButton onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </ToggleButton>
      </SidebarHeader>

      <NavList>
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            $active={activeItem === item.id}
            onClick={() => setActiveItem(item.id)}
          >
            <NavIcon $isOpen={isOpen}>{item.icon}</NavIcon>
            <Link
              to={item.path}
              style={{
                color: 'white',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <NavText $isOpen={isOpen}>{item.text}</NavText>
            </Link>
          </NavItem>
        ))}
      </NavList>
    </SidebarContainer>
  );
};

export default Sidebar;