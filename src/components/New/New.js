import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    new: PropTypes.shape({
        urlToImage: PropTypes.string,
        url: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        source: PropTypes.object
    })
}

const New = (props) => {

    const {urlToImage, url, title, description, source} = props.new;

    return (
        <div className="col s12 m4 l4">
            <div className="card">
                <div className="card-image">
                    <img src={urlToImage} alt={title} />
                    <span className="card-title">{source.name}</span>
                </div>
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a className="waves-effects waves-light btn" href={url} target="_blank">Ver</a>
                </div>
            </div>
        </div>
    )
};

New.propTypes = propTypes;

export default New;