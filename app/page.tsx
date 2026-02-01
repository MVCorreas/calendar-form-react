"use client";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full bg-rose-200">
      <h3>Calendar</h3>
      <form>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            What to add to the calendar?
          </legend>
          <input type="text" className="input" placeholder="Type here" />
        </fieldset>
        <div>
          <input type="date" className="input" />
        </div>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Description</legend>
          <textarea className="textarea h-24" placeholder="Bio"></textarea>
        </fieldset>
        <button className="btn btn-active btn-secondary">Primary</button>
      </form>
      <div></div>
    </main>
  );
}
