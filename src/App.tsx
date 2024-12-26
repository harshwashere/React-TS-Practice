import "./App.css";
import Clock from "./components/Describing/ComponentPure/01_Clock";
import Profile from "./components/Describing/ComponentPure/02_Profile";
import StoryTray from "./components/Describing/ComponentPure/03_StoryTray";
import { Stories } from "./components/Describing/ComponentPure/Stories";
import Gallery from "./components/Interactivity/Component memory/01_Gallery";
import Form from "./components/Interactivity/Component memory/02_StuckInput";
import FeedbackForm from "./components/Interactivity/Component memory/03_Crash";
import FeedbackForm2 from "./components/Interactivity/Component memory/04_UselessState";
import LightSwitch from "./components/Interactivity/Events/01_EventHandler";
import WireEvents from "./components/Interactivity/Events/02_WireEvents";
import RequestTracker from "./components/Interactivity/Queing/01_Counter";
import TrafficLight from "./components/Interactivity/Snapshot/TrafficLight";

function App() {
  return (
    <>
      <div>
        <Clock date={new Date(Date.now())} />

        <Profile
          person={{
            name: "Taylor Swift",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsJVFD2EuKAYCvAzuLoQnxU6VtIyeqt8Wvzg&s",
          }}
        />
        <Profile
          person={{
            name: "Sunidhi Chauhan",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKwea663R5P01Uxr-3w9kK9k1D8G0-U7VAGQ&s",
          }}
        />

        <StoryTray stories={Stories} />

        <LightSwitch />
        <br />
        <br />
        <WireEvents />
        <br />
        <br />
        <Gallery />
        <br />
        <br />
        <Form />
        <br />
        <br />
        <FeedbackForm />
        <br />
        <br />
        <FeedbackForm2 />
        <br />
        <br />
        <TrafficLight />
        <br />
        <br />
        <RequestTracker />
      </div>
    </>
  );
}

export default App;
