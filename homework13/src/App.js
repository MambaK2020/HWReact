import Filter from "./components/Filter";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20 }}>
    <h1>Список пользователей</h1>
      <Filter/>
      <UserList/>
    </div>
  );
}

export default App;
