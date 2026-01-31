import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <Button color="primary" onClick={() => setShowAlert(true)}>
        Click me
      </Button>

      {showAlert && (
        <Alert onClick={() => setShowAlert(false)}>
          You clicked the button!
        </Alert>
      )}
    </>
  );
}

export default App;
