import React, {Component} from 'react';

import New from '../New';

class News extends Component {
    render() { 
        return (
            <div className="row">
                { this.props.news.map(report => (
                    <New
                        key={report.new}
                        new={report}
                    />
                ))}
            </div>
        );
    }
}
 
export default News;