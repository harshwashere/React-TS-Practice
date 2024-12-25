import "./App.css";
import Clock from "./describing/ComponentPure/01_Clock";
import Profile from "./describing/ComponentPure/02_Profile";
import StoryTray from "./describing/ComponentPure/03_StoryTray";
import { Stories } from "./describing/ComponentPure/Stories";
import LightSwitch from "./describing/Events/01_EventHandler";
import WireEvents from "./describing/Events/02_WireEvents";

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
      </div>
    </>
  );
}

export default App;
