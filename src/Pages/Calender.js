import React from 'react'
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';

const Calender = () => {
  const pageStyle = {
    backgroundColor: '#F3F2F7',
  };
  return (
    <>
        <div style={pageStyle}>
    <Sidebar>
    <div style={{padding: '25px' ,marginTop:'100px',marginLeft:'150px',marginRight:'150px',backgroundColor:"pink"}}> 
    
      </div>
      <div>
 
      </div>
      <div style={{marginTop:'100px',marginLeft:'150px',marginRight:'150px'}}> 
    <Footer/>
    </div>
    </Sidebar>
    </div>
 
  </>


    
    )
}

export default Calender;