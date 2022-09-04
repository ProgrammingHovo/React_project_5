import React, { useState } from 'react';

const Tour = ({id, name, price, info, image, removeTour}) => {
    const [ readMore, setReadMore ] = useState(false)
    return <article>
        <img src={image} alt={name} />
        <footer>
            <div className='tour-info'>
                <h4>{name}</h4>
                <h4>${price}</h4>
            </div>
        </footer>
        <p>
            {readMore?info:`${info.substring(0, 200)}...`}
            <button onClick={() => 
                setReadMore(!readMore)}>
                {readMore?'show less':'show more'}
            </button>
        </p>
        <button onClick={() => removeTour(id)}>
            not interested
        </button>
    </article>
};

export default Tour;