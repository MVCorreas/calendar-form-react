import EventCard from "./EventCard";
import { Event } from "../types";

export default function EventsContainer({ events }: { events: Event[] }) { //Event is one object, but in props we are receiving an array of events, not one single event
  const sortedEvents = [...events].sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="mb-6 text-3xl font-bold text-gray-800">Events List</h2>
      <div className="space-y-4">
        {sortedEvents.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            No events yet. Add your first event!
          </p>
        ) : (
          sortedEvents.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              date={event.date}
              description={event.description}
            />
          ))
        )}
      </div>
    </div>
  );
}
