import { Outlet } from 'react-router-dom';
import Nav from './components/Nav'

function App() {
  //const [count, setCount] = useState(0)
  //code logic
  //variable,function,states,hook,functionl logic
  return (
    <div className='min-h-screen bg-neutral-100'>
      <Nav/>
      <main className='container mx-auto px-4 py-8'>
        <Outlet/>
      </main>
    </div>
  
    
  )
}

export default App;
