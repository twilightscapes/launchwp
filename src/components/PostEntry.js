import React from 'react';
import PostEntryTitle from './PostEntryTitle';
import PostEntryMeta from './PostEntryMeta';
import PostEntryMedia from './PostEntryMedia';
import config from '../../config';

const PostEntry = ({ post, classes = '' }) => {

  const excerpt = post.excerpt
    ? post.excerpt.replace(config.wordPressUrl, '')
    : `${post.content &&
        post.content
          .split(' ')
          .slice(0, 30)
          .join(' ')} ...`;

  return (
	  
	  
    <article className={ classes }>
     
          <header className="entry-header">
          <div>{post.featuredImage && <PostEntryMedia post={post} location="blog" />}</div>
            <PostEntryTitle
              post={post}
              location="blog"
              titleClass="entry-title h1"
            />
          </header>
          
          

          

          <div
            className="entry-content"
            dangerouslySetInnerHTML={{
              __html: excerpt,
            }}
          />
        
        <PostEntryMeta className="xl:w-1/4 xl:order-first xl:pr-4 xl:text-center" post={post} location="blog" />
      
    </article>
  );
};

export default PostEntry;
