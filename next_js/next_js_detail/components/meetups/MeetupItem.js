import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import {useRouter} from "next/router";

function MeetupItem(props) {
  const router = useRouter();
  function showDetailhandler() {
    router.push('/' + props.id); // <Link> 와 같은 동작을하지만 프로그래밍 방식
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailhandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
