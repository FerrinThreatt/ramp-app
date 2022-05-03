import React from "react";

import Input from "./components/input";

function App() {
  return (
    <div>
      <Input prop={[1, 2, 3, 4, 5]} />
      <Input prop={"Value"} />
      <Input prop={false} />
    </div>
  );
}

export default App;
