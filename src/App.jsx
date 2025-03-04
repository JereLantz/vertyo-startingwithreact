import Greeting from "./components/Greeting"
import ThemeToggle from "./components/ThemeToggle"
import LoginMsg from "./components/LoginMsg"
import TodoData from "./TodoData"
import TodoList from "./components/TodoList"

function App() {
  return (
      <div>
      <p>Hello world</p>
      <Greeting>Jere</Greeting>
      <ThemeToggle></ThemeToggle>

      <div>
      <LoginMsg isLoggedIn={true}></LoginMsg>
      <LoginMsg isLoggedIn={false}></LoginMsg>
      </div>

      <div>
      <h3>Your tasks for today:</h3>
      <ul>
      {TodoData.map((task) => (<TodoList key={task} task={task}/>))}
      </ul>
      </div>
      </div>
  )
}

export default App
