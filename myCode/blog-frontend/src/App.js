import React from 'react'
import {Route} from 'react-router-dom'
import PostListPage from './pages/PostListPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import WritePage from './pages/WritePage'
import PostPage from './pages/PostPage'

const App = ()=>{
  return(
    <>
    {/* path={['/@:username', '/']} 배열 형태로 경로를 넣으면 한 라우트 컴포넌트에 여러개의 경로를 설정 가능 */}
    {/* 유저 계정을 주소 경로로 넣어서 사용하는 medium, branch 등은 @를 사용하기도 함 */}
      <Route component={PostListPage} path={['/@:username', '/']} exact/>
      <Route component={LoginPage} path="/login"/>
      <Route component={RegisterPage} path="/register"/>
      <Route component={WritePage} path="/write"/>
      <Route component={PostPage} path="/@:username/:postId"/>
    </>
  )
}
export default App