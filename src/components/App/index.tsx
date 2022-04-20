import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IPhoto } from '../../interfaces/photo';
import { IPost } from '../../interfaces/post';
import { IUsers } from '../../store/reducers/users';
import { PhotoList } from '../PhotoList';
import { PostList } from '../PostList';
import { TodosList } from '../TodoList/Index';
import { UsersTS } from '../UsersTS';
import './App.css';


function App() {
  const dispatch = useDispatch()
  const [posts, setPosts] = useState<IPost[]>([])
  const [users, setUsers] = useState<IUsers[]>([])
  const [photos, setPhotos] = useState<IPhoto[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(async (res) =>{
      setPosts(await res.json())
    })
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=4').then(async (res) =>{
      setPhotos(await res.json())
    })
  }, [])

  return (
    <div className="App">
        <UsersTS />
        <TodosList/>
        <PhotoList photos={photos} />
        <PostList posts={posts} users={users} />
    </div>
  )
}

export default App;
