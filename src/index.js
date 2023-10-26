import ReactDOM from 'react-dom/client'; //리액트의 DOM 기능을 사용하기 위해 import

import './index.css';
import App from './App'; // App.js의 기능을 import해와 App 이라는 이름을 가지게하고

//코드가 생성될 루트 위치 지정

// root라는 아이디를 가진 요소를 읽어와 root로 지정하고
const root = ReactDOM.createRoot(document.getElementById('root'));
// 이 루트에 import 해왔던 App.js를 렌더링한다.
root.render(<App />);
