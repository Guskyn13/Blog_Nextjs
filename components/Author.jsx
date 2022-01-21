import React from 'react';
import Image from 'next/image';

// import { grapgCMSImageLoader } from '../util';


const Author = ({ author }) => {
    return (
        <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20'>
            <div className='absolute left-0 right-0 -top-14'>
                <Image 
                    unoptimized
                    // loader={graphCMSImageLoader}
                    alt={author.name}
                    height="100px"
                    width="100px"
                    className='align-middle rounded-full'
                    src={author.photo.url}
                />
            </div>
            <h3 className='text-white mt-4 text-xl font-bold mb-4'>{author.name}</h3>
            <p className='text-white text-ls'>{author.bio}</p>
        </div>
    )
}

export default Author
