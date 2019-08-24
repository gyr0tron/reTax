import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../../routes";

// export default () => {
//   return (
//     <Menu style={{ marginTop: "20px" }}>
//       <Link route='/'>
//         <a className='item'>reTax</a>
//       </Link>

//       <Menu.Menu position='right'>
//         <Link route='/'>
//           <a className='item'>Bills</a>
//         </Link>
//         <Link route='/paytax'>
//           <a className='item'>Pay Tax</a>
//         </Link>
//         <Link route='/bills/new'>
//           <a className='item'>+</a>
//         </Link>
//       </Menu.Menu>
//     </Menu>
//   );
// };

class Layout extends Component {
  render() {
    return (
      <nav
        id='navbar'
        className='navbar navbar-expand-lg navbar-light bg-white'
      >
        <div className='container'>
          <a className='navbar-brand' href='/'>
            <img id='logo' src='/static/img/logo_black.png' />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbar-primary'
            aria-controls='navbar-primary'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbar-primary'>
            <div className='navbar-collapse-header'>
              <div className='row'>
                <div className='col-6 collapse-brand'>
                  <a href='/'>
                    <img src='/static/img/logo_black.png' />
                  </a>
                </div>
                <div className='col-6 collapse-close'>
                  <button
                    type='button'
                    className='navbar-toggler'
                    data-toggle='collapse'
                    data-target='#navbar-primary'
                    aria-controls='navbar-primary'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                  >
                    <span />
                    <span />
                  </button>
                </div>
              </div>
            </div>
            <ul className='navbar-nav ml-lg-auto'>
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  Bills
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/paytax'>
                  Pay Tax
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Layout;
