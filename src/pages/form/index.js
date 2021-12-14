import Layout from "components/layout";
import { useTask } from "context/taskContext";
import { useRouter } from "next/router";
import React, {useState, useEffect} from "react";

export default function FormPage() {

const [ input, setInput] = useState({ title:'', description:''})
const { push , query } = useRouter()
const { addTask, tasks, updateTask } = useTask()

const handleSubmit = (e) => {
  e.preventDefault()
    if(!query.id){
       addTask(input.title, input.description)
    }else{
      updateTask(query.id, input)
    }
    push('/') 
}

const inputValue = (e) => {
    setInput({
      ...input,
      [e.target.name]:e.target.value
    })
}

 useEffect(() => {
   if(query.id){
      const {title, description} = tasks.find(t=>t.id==query.id)
      setInput({...input, title:title, description:description }) 
   }
 }, [])

  return (
    <Layout title="form task">

      <div className="content">
        <h3 className="text-center font-bold text-2xl">
           { query.id ? 'edit task':'creating task'}
        </h3>
        <form className="mx-auto text-center shadow-2xl py-4 px-3 w-64" onSubmit={handleSubmit}>
          <div className="mb-2">
            <input
              className=" mx-2 w-full border border-gray-400 text-black bg-gray-200 py-2 border rounded focus:outline-none"
              type="text"
              name="title"
              value={input.title}
              onChange={inputValue}
              placeholder="title"
            />
          </div>

          <div className="mb-2">
            <textarea 
              className="mx-2 w-full bg-gray-200 border-gray-400 py-2 border rounded focus:outline-none leading-4"
              type="text"
              name="description"
              placeholder="description"
              onChange={inputValue}
               rows="3"
               value={input.description}
            >
          </textarea>
          </div>
          <button
            className="rounded bg-green-500 py-2 px-3 text-white font-bold"
            type="submit" >
               { query.id ? 'edit':'save'}
          </button>
        </form>

        </div>
    </Layout>
  );
}
