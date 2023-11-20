import {useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";

import NewChallenge from './NewChallenge.jsx';

export default function Header() {
    const [isCreatingNewChallenge, setIsCreatingNewChallenge] = useState();

    function handleStartAddNewChallenge() {
        setIsCreatingNewChallenge(true);
    }

    function handleDone() {
        setIsCreatingNewChallenge(false);
    }

    return (
        <>
            <AnimatePresence> {/*모달이 즉시 사라지면서 모션이 실행되지 않는 것을 막아준다.(exit가 있는지 확인)*/}
                {isCreatingNewChallenge && <NewChallenge onDone={handleDone}/>}
            </AnimatePresence>


            <header id="main-header">
                <h1>Your Challenges</h1>
                <motion.button
                    whileHover={{scale:1.1}}
                    transition={{type:'spring', stiffness: 500}}
                    onClick={handleStartAddNewChallenge}
                    className="button">
                    Add Challenge
                </motion.button>
            </header>
        </>
    );
}
