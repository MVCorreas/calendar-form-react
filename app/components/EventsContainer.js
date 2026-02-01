import EventCard from "./EventCard";

export default function EventsContainer({ events }) {
  const sortedEvents = [...events].sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
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
