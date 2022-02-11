import { useRouter } from 'next/router';
import EventsSearch from '../../components/events-search';
import Layout from '../../components/layout';
import EventsList from '../../components/events-list';
import { getAllEvents } from '../../EVENTS';

const EventsPage = () => {
  const allEvents = getAllEvents();
  const router = useRouter();

  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <Layout>
      <EventsSearch onSearch={findEventHandler} />
      <EventsList events={allEvents} />
    </Layout>
  );
};

export default EventsPage;
