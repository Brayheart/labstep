import React, { Component } from 'react'

class Posts extends Component {
  render() {
    const posts = this.props.posts.map(p => {
      p.author.fullName = `${p.author.first} ${p.author.second}`;
      return p;
    });

    return <div className="posts">
        {posts.map(post => <div className="post" key={post.id}>
            {/* TO-DO: Write the HTML and CSS to display the post according to specs */}

            <div className="pull-right">
              <img src="icon-edit.svg" className="post-edit" alt="Edit post" />
            </div>

            <div className="post-meta">
              <img src="icon-user.svg" className="post-author-image" alt="" />
              <div className="post-info">
                <span className="post-author">{post.author.fullName}</span>
                <span> created a post</span>
                <div className="post-posted">{post.posted}</div>
              </div>
            </div>

            <div className="post-body">{post.body}</div>

            {/* END TO-DO */}
          </div>)}
      </div>;
  }
}

export default Posts
