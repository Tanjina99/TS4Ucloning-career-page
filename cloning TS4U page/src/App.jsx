import { Route, Routes } from "react-router-dom"
import JobsData from "./components/jobsData"
import JobsTypes from "./components/JobsTypes"


function App() {
  return (
    <Routes>
    <Route path="/jobsdata" element={<JobsData></JobsData>}></Route>
    <Route path="/job/:jobId" element={<JobsTypes></JobsTypes>}></Route>
    </Routes>
  )
}

export default App
