import "./App.css";
import EventsClass from "./components/EventsClass";
import EventsFunctional from "./components/EventsFunctional";
import EventsBinding from "./components/EventsBinding";

function App() {
  return <div className="App">
      {/* <EventsFunctional />
      <EventsClass /> */}
      <EventsBinding />
  </div>;
}

export default App;