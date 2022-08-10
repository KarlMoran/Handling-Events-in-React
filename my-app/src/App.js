import "./App.css";
// import EventsClass from "./components/EventsClass";
// import EventsFunctional from "./components/EventsFunctional";
// import EventsBinding from "./components/EventsBinding";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";

function App() {
  return <div className="App">
      {/* <EventsFunctional />
      <EventsClass /> */}
      {/* <EventsBinding /> */}
      <ConditionalRenderingFunctional connected={true}/>
      <ConditionalRenderingClass />
  </div>;
}

export default App;