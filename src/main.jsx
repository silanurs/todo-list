import ReactDOM from 'react-dom/client';
import App from './App';
import Todos from './components/todos';
import Today from './components/today';
import Year from './components/year';
import Notes from './components/notes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([

  {
    path:"/todo-list/",
    element:<App></App>,
    children:[
      {
        index:true,
        element:<Todos></Todos>
      },
      {
        path:"Today",
        element:<Today></Today>
      },
      {
        path:"Year", 
        element:<Year></Year>
      },
      {
        path:"Notes",
        element:<Notes></Notes>
      }
    ]
  },

])



ReactDOM.createRoot(document.getElementById("root")).render(
  //didn't use <React.StrictMode> because it was rendering the page twice on mount
   <RouterProvider router={router}></RouterProvider>

);

