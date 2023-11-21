import {render, screen} from "@testing-library/react";
import Async from "./Async";

describe('Async component', () => {
    test('renders posts if request succeeds', async ()=>{
        //시뮬레이팅
        window.fetch = jest.fn() // 사용자 정의 mock 함수를 만든다(over write)
        window.fetch.mockResolvedValueOnce({// fetch 되었을 때 반환해야하는 값을 지정할 수 있다.
            json: async () => [{id: 'p1', title: 'First post'}]
        });
        render(<Async/>)

        //하나를 초과하는 아이템이 있다면 getAllBy...
        //async로 요청을 보내니 response가 오기 전에 확인하면 요소를 찾지 못한다.
        //getAllBy는 즉시 쿼리를 반환하지만 findALlByRole은 프로미스를 반환한다.
        const listItemElements = await screen.findAllByRole('listitem');

        expect(listItemElements).not.toHaveLength(0); // 길이를 확인하여 비어있는지 확인.
    })
})