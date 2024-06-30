// import Student from "./components/props.jsx";
import Greeting from "./components/conditionalrendering.jsx"
function App() {
  return (
    <>
      <Greeting isLoggedIn={true} username="Noman" />
    </>
  );
}

export default App
