import React from 'react';
import './Sidebar.css';

function Sidebar() {
return (
    <aside className="sidebar">
        <ul>
            <li><a href="#dashboard">Trang tổng quan</a></li>
            <li><a href="#profile">Hồ sơ</a></li>
            <li><a href="#settings">Cài đặt</a></li>
        </ul>
    </aside>
    );
}

export default Sidebar;