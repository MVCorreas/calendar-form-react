import EventCard from "./EventCard";

export default function EventsContainer({ title, date, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="mb-6 text-3xl font-bold text-gray-800">Events List</h2>
      <EventCard title={title} date={date} description={description} />
    </div>
  );
}
