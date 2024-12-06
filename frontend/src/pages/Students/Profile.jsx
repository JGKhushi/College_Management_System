// ProfileSection.js
import React from 'react';
import Sidebar from './Sidebar';
import {
  ProfileContainer,
  SidebarContainer,
  Content,
  ProfileHeader,
  ProfileInfo,
  ProfileDetail,
  Label,
  Value,
} from '../../styles/SettingsProfileStyles'; // Import styled components from ProfileSectionStyles.js

const ProfileSection = () => {
  // Sample student profile data
  const studentProfile = {
    name: 'Charu Chadokar',
    age: 20,
    grade: 'CSBS',
    school: 'School of Information Technology RGPV Bhopal',
    email: 'charchadokar@gmail.com'
  };

  return (
    <ProfileContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ProfileHeader>Profile</ProfileHeader>
        <ProfileInfo>
          <ProfileDetail>
            <Label>Name:</Label>
            <Value>{studentProfile.name}</Value>
          </ProfileDetail>
          <ProfileDetail>
            <Label>Age:</Label>
            <Value>{studentProfile.age}</Value>
          </ProfileDetail>
          <ProfileDetail>
            <Label>Grade:</Label>
            <Value>{studentProfile.grade}</Value>
          </ProfileDetail>
          <ProfileDetail>
            <Label>College:</Label>
            <Value>{studentProfile.school}</Value>
          </ProfileDetail>
          <ProfileDetail>
            <Label>Email:</Label>
            <Value>{studentProfile.email}</Value>
          </ProfileDetail>
        </ProfileInfo>
      </Content>
    </ProfileContainer>
  );
};

export default ProfileSection;
