import Event from './event';
import classes from '../styles/event-list.module.css';
const EventsList = ({ events }) => {
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <Event event={event} />
      ))}
    </ul>
  );
};

export default EventsList;
