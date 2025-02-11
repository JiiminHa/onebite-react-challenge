import "./App.css";
import Welcome from "./components/Welcome";
function App() {
  return (
    <>
      <Welcome name="이정환" isMember={true} />
      <Welcome name="이정환" isMember={false} />
    </>
  );
}

export default App;
