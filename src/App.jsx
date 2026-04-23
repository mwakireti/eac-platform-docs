import { Routes, Route } from 'react-router';
import All_topics from './pages/All_topics';
import Getting_started from './pages/Getting_started';
import Accounts_Auth from './pages/Accounts_and_auth';
import Management from './pages/Management';
import Technical from './pages/Technical';
import Layout from './components/layout/Layout';
import Admin_and_staff from './pages/Admin_and_staff';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<All_topics />} />
        <Route path="/all_topics" element={<All_topics />} />
        <Route path="/getting_started" element={<Getting_started />} />
        <Route path="/accounts_and_auth" element={<Accounts_Auth />} />
        <Route path="/management" element={<Management />} />
        <Route path="/admin_and_staff" element={<Admin_and_staff />} />
        <Route path="/technical" element={<Technical />} />
        <Route path="*" element={<All_topics />} />
      </Route>
    </Routes>
  );
};

export default App;