import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/Home";
import ProdutsPage from "./pages/Produts";
import RootLayer from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductsDetail from "./pages/ProductsDetail";

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
    path: '/',
    element: <RootLayer />, // wrapper 역할을 수행한다.
    errorElement: <ErrorPage/>, //에러 페이지
    children: [
      {
        index: true, // 기본 페이지라는 것을 알려준다.
        // path: '/',// 도메인 뒤 경로를 설정한다.
        element: <HomePage /> //활성화 되면 로딩 되어야하는 컴포넌트 정의
      },
      {// 객체 하나당 하나의 라우터
        path: '/products',
        element: <ProdutsPage />
      },
      {
        path: '/products/:productId', //:[구분자]로 동적으로 URL 형성하기(Place Holder)
        element: <ProductsDetail />
      },
    ],
  },
])

function App() {
  return(
    <RouterProvider router={router}/> // RouterProvider에 createBrowserRouter 넘겨주기
  );
}

export default App;
