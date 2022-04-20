import {FC, ReactElement, useEffect, useState} from 'react'
import { IPost } from '../../interfaces/post'
import { IUsers } from '../../store/reducers/users'

interface PostListProps {
    posts: IPost[]
    users: IUsers[]
}

export const PostList: FC<PostListProps> = ({posts, users}): ReactElement => {

  function findUserById(userId: number) {
    let user = users.find((user) => user.id == userId)
    if(user) {
      return (
        <div key={user.id}>
          <strong>
            {user.name},
            {user.email},
            {user.company.name}
          </strong>
        </div>
      )
    }
  }

    return (
        <>
            {posts.map(post => (
                <div key={post.id}>
                    <strong>{post.title}</strong><br/>
                    {post.body}<br/><br/>
                    {findUserById(post.userId)}
                </div>
            ))}
        </>
    )
}