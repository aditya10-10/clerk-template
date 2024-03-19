import React from 'react';
import Header from '../components/Navbar';
import DonorListForm from '../components/DonorList';
import NgoList from '../components/NgoList';


const Home = () => {
    return (
        <div>
          <Header/>
          <DonorListForm/>
          {/* <NgoList/> */}
          
        </div>
    );
};

export default Home;