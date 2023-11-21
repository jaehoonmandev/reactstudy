import Gretting from "./Gretting";
import {render, screen} from "@testing-library/react";

test(
    'renders Hello World as a text',
    () => {
        // Arrange
        render(<Gretting />) // 렌더링하기

        // Act


        //Assert, DOM 구조를 찾는다.(단언)
        // 찾으려는 텍스트체크, 두 번째 인자로 exact: false를 한다면 정확히 일치 하지 않아도된다.
        const helloWolrdElement = screen.getByText('Hello World', {exact: false})
        expect(helloWolrdElement).toBeInTheDocument(); // 문서 안에 있는지 확인.

    }
)