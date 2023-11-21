import Gretting from "./Gretting";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

//테스트 그룹화를 위해 suite 생성
describe('Greeting component', () => {
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
    );

    test(
        'renders good to see you if the button was NOT clicked', // Greering component rebders good to see you...
        () => {
            // Arrange
            render(<Gretting />)
            // Act
            const outputElement = screen.getByText('Good to See you!', {exact: false})
            expect(outputElement).toBeInTheDocument();

        }
    );

    test('renders Changed if the button was clicked', () => {
        render(<Gretting/>)

        const bottonElement = screen.getByRole('button') // 버튼 역할하는 요소
        userEvent.click(bottonElement); //버튼 액션 실행하기.

        const outputElement = screen.getByText('Changed!', {exact: false})
        expect(outputElement).toBeInTheDocument();
    });

    test('not renders good to see you if the button was clicked', () => {
        render(<Gretting/>)

        const bottonElement = screen.getByRole('button') // 버튼 역할하는 요소
        userEvent.click(bottonElement); //버튼 액션 실행하기.

        //queryByText로 있는지 검색
        const outputElement = screen.queryByText('Good to See you!', {exact: false})
        expect(outputElement).toBeNull();
    });
})
