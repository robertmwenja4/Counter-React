import React, { Component } from 'react';

//Stateless functioncl Components
const NavBar = ({totalCounters}) => {//Use object destructuring to remove props
    console.log('NavBar - Rendered');
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <a className="navbar-brand" href="#">
                Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
            </a>
            </div>
        </nav>
     );
}
 
export default NavBar;

// class NavBar extends Component {
//     render() { 
//         return (
            
//         );
//     }
// }
 
// export default NavBar;