import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import FindJobs from './Pages/FindJobs';
import FindTalent from './Pages/FindTalent';
import UploadJob from './Pages/UploadJob';
import AboutUs from './Pages/AboutUs';
import HomePage from './Pages/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="find-jobs" element={<FindJobs />} />
          <Route path="find-talent" element={<FindTalent />} />
          <Route path="upload-jobs" element={<UploadJob />} />
          <Route path="about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
