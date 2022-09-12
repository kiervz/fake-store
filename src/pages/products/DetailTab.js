import React, { useState } from 'react'

import './DetailTab.css'

const DetailTab = ({product}) => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    
    return ( 
        <div className='py-5'>
            <div className='container'>
                <div className='bloc-tabs'>
                    <button
                        className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
                        onClick={() => toggleTab(1)}>
                        Description
                    </button>
                    <button
                        className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
                        onClick={() => toggleTab(2)}>
                        Reviews
                    </button>
                </div>

                <div className='content-tabs'>
                    <div className={toggleState === 1 ? 'content  active-content' : 'content'}>
                        {product.description}
                    </div>

                    <div className={toggleState === 2 ? 'content  active-content' : 'content'}>
                        Reviews 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailTab