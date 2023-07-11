import React from 'react';
import './Nav.css';
import log from '../../assets/linktree_logo.png'

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-green">
            <div class="container-fluid bg-white text-dark  mb-3">
                <a class="navbar-brand" href="#"><img src={log} style={{ height: '30px', width: '50px' }} /></a>



                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#">Templates</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Marketplace</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Discover
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Linktree for instagram</a></li>
                                <li><a className="dropdown-item" href="#">Linktree for tiktok</a></li>
                                <li><a className="dropdown-item" href="#">Linktree for Twitter</a></li>
                                <li><a className="dropdown-item" href="#">Linktree for LinkedIn</a></li>

                            </ul>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link " href="#">Pricing</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Learn
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">All Articles</a></li>
                                <li><a className="dropdown-item" href="#">Creators</a></li>
                                <li><a className="dropdown-item" href="#">Trends</a></li>
                                <li><a className="dropdown-item" href="#">Best Practices</a></li>
                                <li><a className="dropdown-item" href="#">Company</a></li>
                                <li><a className="dropdown-item" href="#">Product News</a></li>
                                <li><a className="dropdown-item" href="#">Help</a></li>

                            </ul>
                        </li>

                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-but">
                            <a className="btn btn-outline-light bg-light text-dark" href="#">Log in</a>
                        </li>
                        <li className="nav-but">
                            <a className="btn btn-outline-light bg-black text-white " href="#">Sign up free</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
