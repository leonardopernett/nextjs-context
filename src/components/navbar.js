
import { useTask } from "context/taskContext"
import Link from "next/link"
import Router, { useRouter } from "next/router"
import {AiOutlinePlus} from 'react-icons/ai'

export default function Navbar() {

 const router = useRouter()
  const {tasks} = useTask()
  return (
    <>
    <header className="flex justify-between items-center px-20 py-7 bg-gray-800">
         
            <div className="flex items-center">
                <Link href="/">
                <a>
                    <h1 className="text-2xl font-black text-10 text-white">Task crud app</h1>
                </a>
              </Link>
             <span className="text-white font-bold  ml-3 mt-2">{tasks.length} tasks</span>

            </div>
        <div>
             <button 
               className="text-white font-black bg-green-500 hover:bg-green-400 px-3 py-2 rounded flex items-center"
                onClick={ ()=>router.push('/form') }
             >
               <span>Add Task</span>  <AiOutlinePlus className="ml-2"/>
             </button>
        </div>
     </header>

    </>
  )
}
