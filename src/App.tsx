import { Route, Routes } from 'react-router-dom'
import './App.css'
import PostIndex from './postindex'
import PostCreate from './PostCreate'
import PostEdit from './PostEdit'
import PostShow from './PostShow'

function App() {

  return (
    <>
   <Routes>
    <Route path='/' element={<PostIndex/>}></Route>
    <Route path='/create' element={<PostCreate/>}></Route>
    <Route path='/edit/:id' element={<PostEdit/>}></Route>
    <Route path='/show/:id' element={<PostShow/>}></Route>
   </Routes>
    </>
  )
}

export default App
