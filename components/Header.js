export default function Header() {
  return (
    <>
          <div
        className="bg-scroll bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1612198790700-0ff08cb726e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGNvb2tpZSUyMHN0YWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60')`,
          height: "1000px",
        }}
      >
    <header className='flex p-4 bg-rose-200 text-gray-800 font-medium text-2xl font-serif mb-32'>
      <h1>Job Application Tracker</h1>
      <nav>Form</nav>
      <nav>Dashboard</nav>
      <nav>About Us</nav>
    </header>

      </div>
    
    </>
  )
}

// import React from 'react';
// import AuthButtons from './component/AuthButtons';
// import { Navbar, NavItem } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import './App.css';

// class Header extends React.Component {
//   render() {
//     return (
//       <Navbar className="links">
//         <Navbar.Brand className="webName">5-O-Clock</Navbar.Brand>
//         <NavItem><Link to="/" className="nav-link" id="link">Home</Link></NavItem>
//         <NavItem><Link to="/barCart" className="nav-link" id="link">Bar Cart</Link></NavItem>
//         <NavItem><Link to="/about" className="nav-link" id="link">About us</Link></NavItem>
//         <NavItem><Link to="/profile" className="nav-link" id="link">Profile</Link></NavItem>
//         <AuthButtons/>
//       </Navbar>
//     );
//   }
// }

// export default Header;

