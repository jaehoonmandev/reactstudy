import {useState, useEffect} from "react";


const useCounter = (forwards = true) =>{

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(forwards){
                setCounter((prevCounter) => prevCounter + 1);
            }else{
                setCounter((prevCounter) => prevCounter - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [forwards]);


    //원하는 것을 모두 return할 수 있다.
    return counter;
}

export default useCounter;