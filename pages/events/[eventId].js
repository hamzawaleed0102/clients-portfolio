import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import { getEventById } from '../../EVENTS';
import EventDetailCard from '../../components/event-detail-card';

const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) return <p>404: Event not found</p>;
  return (
    <Layout>
      <EventDetailCard
        image={event.image}
        date={event.date}
        location={event.location}
        title={event.title}
        description={event.description}
        isFeatured={event.isFeatured}
        eventId={eventId}
      />
    </Layout>
  );
};

export default EventDetailPage;
