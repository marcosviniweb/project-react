import React from "react";
import { Navbar, Nav, NavItem  ,DropdownItem, UncontrolledDropdown, DropdownToggle, DropdownMenu} from "reactstrap";
import {Link} from 'react-router-dom';
import iconUser from '../../assets/images/icon.png';

const Header = () =>(
                    <Navbar color = "primary navbar-dark" light expand = "md">
                        <Link className = "navbar-brand" to = "/dashboard">Painel</Link>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                            <img class="rounded-circle mt-2" src={iconUser} width="20" height="20"/> 
                           
                                                  
                            </NavItem>

                            <UncontrolledDropdown setActiveFromChild>
                                 <DropdownToggle tag = "a" className = "nav-link menu-header" caret>
                                      Usuário
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                                           <Link className = "dropdown-item" to = "/perfil">
                                                           Perfil
                                                           </Link>
                                                            <DropdownItem>Sair</DropdownItem>
                                                        </DropdownMenu>
                                </UncontrolledDropdown>
                        </Nav>

                        
                    </Navbar>

);

export default Header;