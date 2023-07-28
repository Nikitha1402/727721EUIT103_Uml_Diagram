import React from 'react';
import './time.css';

const GmailLink = () => {
  const handleGmailLinkClick = () => {
    // You can perform any additional actions here before the link opens Gmail
    // For example, you can log some analytics data or update some state.
    // This function will be called when the user clicks on the Gmail link.
  };

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage: 'url("https://png.pngtree.com/png-clipart/20220602/original/pngtree-email-address-background-blank-business-png-image_7856549.png")', // Replace with the path to your background image
    backgroundSize: 'cover', // Adjust the background image size as per your requirement
    backgroundColor: '#f8f8f8',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    minWidth:'200vh', 


    

  };

  const linkStyles = {
    display: 'block',
    color: '#0078D4',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '8px',
    border: '2px solid #0078D4',
    borderRadius: '4px',
    textAlign: 'center',
    width: '200px',
    margin: '290px auto',
    
  };

  return (
    <div className='tim'>
    <div style={containerStyles}>
      <h2 className='timh'>Send an Email</h2>
      <a
        href="mailto:727721euit103@skcet.ac.in" // Replace 'example@gmail.com' with the desired recipient email
        onClick={handleGmailLinkClick}
        style={linkStyles}
      >
        Send Email via Gmail
      </a>
    </div>
    </div>
  );
};

export default GmailLink;
