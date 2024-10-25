import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post.jsx';

const Posts = () => {
  // BEGIN (write your solution here)
    const {entities} = useSelector((state) => state.postsReducer);

    return (
        <div>
            {Object.values(entities).map((entity) => (
                <Post key={entity.id} post={entity} />
            ))}
        </div>
    );
  // END
};

export default Posts;
