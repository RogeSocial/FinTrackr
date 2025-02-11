import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { 
  Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import UserDashboardPage from './pages/UserDashboardPage';
import Expenses from './pages/ExpensesPage';
import Savings from './pages/SavingsPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index element={<LandingPage/>} />
      <Route path="/dashboard" element={<UserDashboardPage/>} />
      <Route path="/expenses" element={<Expenses/>} />
      <Route path="/savings" element={<Savings/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)