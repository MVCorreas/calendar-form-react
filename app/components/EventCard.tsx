import { Event } from "../types";

export default function EventCard(props: Event) {
  return (
    <div className="flex items-start gap-4 p-4 bg-white rounded-md shadow-sm">
      <div className="min-w-27.5 text-sm font-semibold text-gray-700">
        {props.date}
      </div>
      <div className="flex-1">
        <h3 className="text-base font-semibold text-gray-900">{props.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{props.description}</p>
      </div>
    </div>
  );
}
