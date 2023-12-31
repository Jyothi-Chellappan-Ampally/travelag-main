import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Final = ({ data, containerVariants }) => {
    
    return (
        <motion.div className='final'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div className='final-inner'>
                <p>
                    Thank you <span>{`${data.firstName} ${data.lastName}`} </span> 
                    for placing order with us. We wish you a happy eating  <span>{`${data.city}, ${data.country}`}</span> on <span>{data.date}</span>.
                </p>
                <Link to='/'>
                    <span className='book'>Order again</span>
                </Link>
            </div>
        </motion.div>
    )
}

export default Final;
