import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/root/RootLayout';
import SearchPage from './pages/search-page/SearchPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '',
          element: <SearchPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
