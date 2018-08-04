import React, {Component} from 'react';
import PropTypes from 'prop-types';

import New from '../New';

const propTypes = {
    news: PropTypes.array.isRequired
}

class News extends Component {
    render() { 
        return (
            <div className="row">
                { this.props.news.map(report => (
                    <New
                        key={report.url}
                        new={report}
                    />
                ))}
            </div>
        );
    }
}

News.propTypes = propTypes;
 
export default News;