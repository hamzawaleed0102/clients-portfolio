import Image from 'next/image';
import classes from '../styles/event-item.module.css';
import Button from './button';

const EventItem = ({ event }) => {
  const { id, title, image, date, location } = event;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location?.replace(',', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.wrapper}>
      <Image
        src={'/' + image}
        width={200}
        height={200}
        alt={title}
        className={classes.img}
      />
      <div>
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          <time>{humanReadableDate}</time>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
        <div>
          <Button link={exploreLink}>Explore Link</Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
