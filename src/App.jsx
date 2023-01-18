import { Route, Routes } from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage';

function App() {
  const error = {
    status: 404,
    message: "Not Found"
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/errorPage" element={<ErrorPage error={error} />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
