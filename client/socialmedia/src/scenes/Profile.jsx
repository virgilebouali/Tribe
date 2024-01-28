import React from 'react';
import UserHeader from '../components/UserHeader';
import ProfileHero from '../components/ProfileHero';
import Footer from '../components/Footer';
import UserSidebar from '../components/UserSidebar';

const Profile = () => {
  return (
    <>
      <div style={{ display: 'flex' }} className="sm:hidden md:hidden xl:mb-56">
      <UserSidebar style={{ position: 'sticky', top: 0, height: '100vh' }} />
        <div style={{ flex: 1, marginLeft: '500px' }} className="ml-96">
          <ProfileHero className=""/>
          <Footer />

        </div>
      </div>
    </>
  );
}

export default Profile;
