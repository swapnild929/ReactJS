import React from 'react';
import { Link } from 'react-router-dom'
import earthQuakeData from '../data/data.json'

export default function Header() {

  return (
    <header>
      <div className="logo">
        <Link to={`/`}>
          <img src={earthQuakeData.site.logoImage} alt={earthQuakeData.site.title} />
        </Link>
      </div>
      <div className="title">{earthQuakeData.site.title}</div>
      <div className="menu">
        <Link to={"/profile"}>
          <span class="greeting">Welcome {earthQuakeData.profile.firstName}</span>
        </Link>
      </div>
    </header>)
}
