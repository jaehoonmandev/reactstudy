import Users from './components/Users';
import UserFinder from "./components/UserFinder";
/*클래스형 리엑트 랜더링.
* 클래스형은 props를 사용하여 데이터를 핸들링하지 않으니 Componenet를 확장하여 사용한다.
* */

function App() {
  return (
    <div>
      {/*<Users />*/}
        <UserFinder ></UserFinder>
    </div>
  );
}

export default App;
