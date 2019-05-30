import React from 'react';
import '../src/components/styles/header.css';

function Header(){
    return (
<div className="header">
    <span className="brackets">[ </span>
    <span className="Slogan">Making Your Life Easier</span>
    <span className="brackets"> ]</span>
    <h1 className="Title">Discovering the World</h1>
</div>
    );
}

export default Header;