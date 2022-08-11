
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { LeftMenu } from './components/LeftMenu'
import { MainPage } from './components/MainPage'

function App() {
  return (
    <div className="App">
      <LeftMenu/>
      <MainPage/>
      <Routes>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<MainPage/>} />
          <Route path="*" element={<h1>page not found</h1>} />
        </Routes>
    </div>
  )
}

export default App
