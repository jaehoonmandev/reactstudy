import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import HomePage from "./pages/Home";
import ProdutsPage from "./pages/Produts";

// const routeDefinition = createRoutesFromElements(
//     <Route>
//       <Route path={'/'} element={<HomePage/>} />
//       <Route path={'/products'} element={<ProdutsPage />} />
//     </Route>
// )
//
// const router = createBrowserRouter(routeDefinition) ;

const router = createBrowserRouter( [
  {
    path: '/',// 도메인 뒤 경로를 설정한다.
    element: <HomePage/> //활성화 되면 로딩 되어야하는 컴포넌트 정의
  },
  {// 객체 하나당 하나의 라우터
    path: '/products',
    element: <ProdutsPage />
  }
])

function App() {
  return <RouterProvider router={router}/>; // RouterProvider에 createBrowserRouter 넘겨주기
}

export default App;
