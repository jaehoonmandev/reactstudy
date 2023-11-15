
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/Home";
import EventPage from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import RootLayout from "./pages/Root";
import EventRootLayer from "./pages/EventRoot";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />, //wrapping
      children: [
        {
          index: true,
          element: <HomePage/>
        },
        { // event wrapping
          path: 'events',
          element: <EventRootLayer/>,
          children: [
            {
              index:true, //상대 경로
              element: <EventPage/>,
              loader: async () => { // 렌더링 되기 전에 실행
                const response = await fetch('http://localhost:8080/events');

                if (!response.ok) {
                  //...
                } else {
                  const resData = await response.json();
                  return resData.events;
                }
              }
            },
            {
              path: ':eventId',
              element: <EventDetailPage/>
            },
            {
              path: 'new', // 경로가 겹치더라도 우선 순위가 정해져있다.
              element: <NewEventPage/>
            },
            {
              path: ':eventId/edit',
              element: <EditEventPage/>
            },
          ]
        },

      ]
    }

  ])

  return(
      <RouterProvider router={router}>

      </RouterProvider>
  )
}

export default App;
