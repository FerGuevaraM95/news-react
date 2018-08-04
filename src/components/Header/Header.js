import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string.isRequired
}

const Header = (props) => {
    return (
        <nav>
            <div className="nav-wrapper light-blue darken-3">
                <a className="brand-logo center">
                    {props.title}
                </a>
            </div>
        </nav>
    );
};

Header.propTypes = propTypes;

export default Header;