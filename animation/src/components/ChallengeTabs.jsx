import Badge from './Badge.jsx';
import {motion} from "framer-motion";

function Tab({isSelected, onSelect, badgeCaption, children}) {
    return (
        <li>
            <button
                className={isSelected ? 'selected' : undefined}
                onClick={onSelect}
            >
                {children}
                <Badge
                    key={badgeCaption}
                    caption={badgeCaption}></Badge>
            </button>
            {isSelected && <motion.div
                layoutId={"tab-indicator"} // 같은 id를 가진 다른요소가 랜더링 될 때를 자동으로 감지한다.
                className="active-tab-indicator"/>}
        </li>
    );
}

export default function ChallengeTabs({
                                          selectedType,
                                          onSelectType,
                                          challenges,
                                          children,
                                      }) {
    return (
        <>
            <menu id="tabs">
                <Tab
                    isSelected={selectedType === 'active'}
                    onSelect={() => onSelectType('active')}
                    badgeCaption={challenges.active.length}
                >
                    Active
                </Tab>
                <Tab
                    isSelected={selectedType === 'completed'}
                    onSelect={() => onSelectType('completed')}
                    badgeCaption={challenges.completed.length}
                >
                    Completed
                </Tab>
                <Tab
                    isSelected={selectedType === 'failed'}
                    onSelect={() => onSelectType('failed')}
                    badgeCaption={challenges.failed.length}
                >
                    Failed
                </Tab>
            </menu>
            <div>{children}</div>
        </>
    );
}
