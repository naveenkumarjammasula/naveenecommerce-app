import React, { useState } from 'react';
import { NavLink, Navbar } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import {BsCartPlusFill} from 'react-icons/bs';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
function Header() {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    return ( <>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" className='text-decoration-none text-light mx-3'>Add to card</Link>
          <Nav className="me-auto">
            <Link to="/card" className='text-decoration-none text-light'>Home</Link>
            
          </Nav>
              <Badge badgeContent={4} color="primary"    id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
     
          <i ><BsCartPlusFill style={{color:"white",fontSize:35,cursor:"pointer"}}/></i>
    </Badge>
      
        </Container>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      <div className='card_details d-flex justify-content-center align-items-center ' style={{width:"24rem",padding:10,position:"relative"}}>
<i className='fas fa-close smallclose' style={{position:"absolute",top:2,right:20,fontSize:23}}></i>
<p style={{fontSize:22}}>your carts is empty</p>
<img src='https://media.tenor.com/8klrp86awEYAAAAC/cart.gif' className='emptycart_img' style={{width:"5rem",padding:10}}/>

      </div>
      </Menu>

      </Navbar>
    </> );
}

export default Header;