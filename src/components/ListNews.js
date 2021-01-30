import React from 'react';
import New from './New';
import PropTypes from 'prop-types';

const ListNews = ({news}) => {
    return ( 
        <div className="row">
            {news.map(it => (
                <New 
                 key={it.url}
                 newOne={it}
                 />
            ))}
        </div>
     );
}

ListNews.propTypes = {
    news: PropTypes.array.isRequired
}
 
export default ListNews;