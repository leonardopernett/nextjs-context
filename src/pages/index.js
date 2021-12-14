import Layout from "components/layout";
import { useTask } from 'context/taskContext'
import { useRouter } from "next/router";
import Link from "next/link";
import toast, {Toaster} from 'react-hot-toast'
export default function Home() {

  const {tasks, deleteTask} = useTask()
  const router = useRouter()

  const taskList = () =>{
    return tasks.map( (task) => (
      <div key={task.id} className="font-bold bg-gray-800 text-white border ng-gray-500 py-5 px-20  mb-2 cursor-pointer hover:bg-gray-700 flex justify-between">
          <div className="content">
            <p>{task.id}</p> 
            <h3>Title: {task.title}</h3>
            <p> Description: {task.description}</p>
          </div>

          <div className="details">
            <button className="bg-red-500 px-7 py-3" onClick={ () => removeItem(task.id) }>delete</button>
            <Link href={`/edit/${task.id}`}>
              <a className="bg-yellow-500 px-7 py-3 ml-5" >editando</a>
            </Link>
          </div>
          
      </div>
     ))
  }
  
const removeItem = (id) =>{
  deleteTask(id)
  taskList()
  toast.success('task remove')
}

  return (

      <Layout title="home app">
          {
            tasks.length ? (
               taskList()
            ) : 
            (
              <p>you don't have tasks yet</p>
            )
          }
      </Layout>
      
  )
}
