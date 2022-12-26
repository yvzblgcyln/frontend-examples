function App() {
  return (
    <div>
      {process.env.REACT_APP_xxxxxxx}
      {process.env.NODE_ENV === "development" && <div>development</div>}
    </div>
  );
}

export default App;
