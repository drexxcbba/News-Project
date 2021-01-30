import React from 'react';
import New from './New';

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
 
export default ListNews;