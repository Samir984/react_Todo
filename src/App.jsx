import Header from "./components/Header";
import TaskList from "./components/TaskList";
import UserNav from "./components/UserNav";
import TaskProvider from "./context/TaskProvider";
import Modal from "./components/Modal";
import { ModalProvider } from "./context/ModalProvider";

function App() {
  return (
    <div className="container">
      <Header />
      <TaskProvider>
        <ModalProvider>
          <UserNav />
          <Modal />
          <TaskList />
        </ModalProvider>
      </TaskProvider>
    </div>
  );
}

export default App;
