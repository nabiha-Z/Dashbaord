import React, { useState, useEffect } from 'react'
import "./sidebar.css";
import { Link } from "react-router-dom";
import { useIntl } from 'react-intl';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaList,FaRegLaughWink } from 'react-icons/fa';
import { FiMessageSquare } from 'react-icons/fi';
import { BsListTask } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { BiLogOut, BiMenuAltLeft } from 'react-icons/bi';
import sidebarBg from '../../assests/bg4.jpg';
import '../../styles/app.scss';

export default function Sidebar({ image, collapsed, toggled, handleToggleSidebar, handleCollapsedChange, setCollapsed }) {

    const intl = useIntl();
    const { innerWidth: width, innerHeight: height } = window;
    useEffect(() => {

        const { innerWidth: width, innerHeight: height } = window;
    }, []);

    return (
        <ProSidebar
            image={image ? sidebarBg : false}
            collapsed={collapsed}
            toggled={toggled}
            breakPoint="md"
            onToggle={handleToggleSidebar}
            style={{ height: height }}
        >
            <SidebarHeader>
                <div
                    style={{
                        display: 'flex',
                        padding: '24px',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        fontSize: 16,
                        letterSpacing: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        color: 'white',
                        letterSpacing: 2,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between'
                    }}
                >
                    <p>Dashboard</p>
                    <BiMenuAltLeft color='white' style={{ fontSize: 30, backgroundColor: 'rgba(139, 139, 140,0.6)', cursor: 'pointer', borderRadius: 50, padding: 5 }} onClick={() => {
                        handleCollapsedChange(!collapsed)
                        setCollapsed(!collapsed)
                    }}></BiMenuAltLeft>
                </div>
            </SidebarHeader>

            <SidebarContent>
                <Link to="/menu1">
                    <Menu iconShape="circle">
                        <MenuItem icon={<BsListTask style={{ fontSize: 20 }} />} style={{ color: '#BEBEC2', textDecoration: 'none' }}> {intl.formatMessage({ id: 'Menu-1' })}</MenuItem>
                    </Menu>
                </Link>


                <Menu iconShape="circle">


                    <SubMenu
                        // suffix={<span className="badge yellow">3</span>}
                        title="submenus"
                        icon={<FaRegLaughWink />}
                    >
                        <Link to="/submenu1">
                        <MenuItem>submenu 1</MenuItem>
                        </Link>
                        
                        <MenuItem>submenu 2</MenuItem>
                        
                    </SubMenu>
                    <SubMenu title="MultiLevel Menu" icon={<FaList />}>
                        <MenuItem>submenu1 </MenuItem>

                        <SubMenu title='submenu 2'>

                            <MenuItem>submenu 2.1 </MenuItem>
                            <MenuItem>submenu 2.2 </MenuItem>
                            <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 2.3`}>
                                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2.3.1 </MenuItem>
                                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2.3.2 </MenuItem>
                                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2.3.3 </MenuItem>
                            </SubMenu>
                        </SubMenu>
                    </SubMenu>
                </Menu>

            </SidebarContent>

            <SidebarFooter style={{ textAlign: 'center' }}>
                <div
                    className="sidebar-btn-wrapper"
                    style={{
                        padding: '20px 24px',
                    }}
                >
                    <Link to="/">
                        <Menu iconShape="circle">
                            <MenuItem icon={<BiLogOut style={{ fontSize: 20 }} />} style={{ color: '#BEBEC2', textDecoration: 'none', }}> {intl.formatMessage({ id: 'Logout' })}</MenuItem>
                        </Menu>
                    </Link>
                </div>
            </SidebarFooter>
        </ProSidebar >
    );
}
