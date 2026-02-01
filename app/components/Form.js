export default function Form() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="mb-6 text-3xl font-bold text-gray-800">Calendar</h2>
      <form className="space-y-6">
        <fieldset className="border-none">
          <legend className="text-sm font-semibold text-gray-700 mb-2">
            What to add to the calendar?
          </legend>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
            placeholder="Event name"
          />
        </fieldset>
        <div>
          <label className="text-sm font-semibold text-gray-700 mb-2 block">
            Date
          </label>
          <input
            type="date"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
          />
        </div>
        <fieldset className="border-none">
          <legend className="text-sm font-semibold text-gray-700 mb-2">
            Description
          </legend>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-md h-24 resize-none focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
            placeholder="Add a description..."
          ></textarea>
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
