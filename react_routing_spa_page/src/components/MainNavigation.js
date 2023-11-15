import {NavLink} from "react-router-dom";
import classes from './MainNavigation.module.css'
function MainNavigation() {
    return(
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        {/*NavLink로 활성화 되었는지에 따른 스타일을 지정할 수 있다.*/}
                        <NavLink
                            to={'/'}
                             className={({isActive}) => (isActive ? classes.active : undefined)}
                            end//디폴트로 true를 설정한다. 이는 / 의 경로에만 해준다.
                        >
                                Home
                        </NavLink>
                    </li>
                    <li><NavLink to={'/products'} className={({isActive}) => (isActive ? classes.active : undefined)}> Products </NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation