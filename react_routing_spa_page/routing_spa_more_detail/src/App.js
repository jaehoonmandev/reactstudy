
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/Home";
import EventPage, {loader as eventsLoader} from "./pages/Events";
import EventDetailPage, {loader as eventDetailLoader,action as deleteAction} from "./pages/EventDetail";
import NewEventPage,{action as newEventAction} from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import RootLayout from "./pages/Root";
import EventRootLayer from "./pages/EventRoot";
import ErrorPage from "./pages/Error";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />, //wrapping
      errorElement: <ErrorPage/>, // 라우터 내에서 어떠한 에러가 발생한다면 Bubble up
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
              loader: eventsLoader,// 함수화 하여 간단한 구조로 만든다.
            },
            {
              path: ':eventId',
              id: 'event-detail', // 부모 라우트의 데이터를 사용하기 위해서는 id 지정
              loader: eventDetailLoader, // 중첩된 라우트 기능.(부모 제공)
              children:[
                {
                  // path: ':eventId',
                  index:true,
                  element: <EventDetailPage/>,
                  action: deleteAction,
                },
                {
                  path: 'edit',
                  element: <EditEventPage/>
                },
              ],
            },
            {
              path: 'new', // 경로가 겹치더라도 우선 순위가 정해져있다.
              element: <NewEventPage/>,
              action: newEventAction
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
