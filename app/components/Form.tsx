import { FormFields, FieldErrors } from "../types";

type FormProps = FormFields & {
  errors: FieldErrors;
  updateFields: (field: keyof FormFields, value: string) => void;
  handleSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
};

export default function Form(props: FormProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="mb-6 text-3xl font-bold text-gray-800">Calendar</h2>
      <form className="space-y-6" onSubmit={props.handleSubmit}>
        <fieldset className="border-none">
          <legend className="text-sm font-semibold text-gray-700 mb-2">
            What to add to the calendar?
          </legend>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
            placeholder="Event name"
            value={props.title}
            onChange={(e) => props.updateFields("title", e.target.value)}
          />
          {props.errors.title && (
            <p className="text-red-600 text-xs">{props.errors.title}</p>
          )}
        </fieldset>

        <div>
          <label className="text-sm font-semibold text-gray-700 mb-2 block">
            Date
          </label>
          <input
            type="date"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
            value={props.date}
            onChange={(e) => props.updateFields("date", e.target.value)}
          />
          {props.errors.date && (
            <p className="text-red-600 text-xs">{props.errors.date}</p>
          )}
        </div>

        <fieldset className="border-none">
          <legend className="text-sm font-semibold text-gray-700 mb-2">
            Description
          </legend>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-md h-24 resize-none focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
            placeholder="Add a description..."
            value={props.description}
            onChange={(e) => props.updateFields("description", e.target.value)}
          ></textarea>
          {props.errors.description && (
            <p className="text-red-600 text-xs">{props.errors.description}</p>
          )}
        </fieldset>
        <button
          type="submit"
          className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200"
        >
          Add to Calendar
        </button>
      </form>
    </div>
  );
}
