import { useEffect, useState } from "react";
import axios from "axios";

function App() {  const [data, setData] = useState("Loading...");

  const getData = async () => {
    try {
      const res = await axios.get("/api")
      setData(res.data.message);
    } catch (error) {
      setData("❌ Backend connect nahi hua karo jaldi hmmmm....");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🚀 React + Node Project now we running the new 
        myproject to system to see the simple to main thing to run that
      </h1>
      <h2>{data}</h2>
      <button onClick={getData}>Refresh 🔄</button>
    </div>
  );
}

export default App;

