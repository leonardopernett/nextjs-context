import { TaskProvider } from 'context/taskContext'
import 'styles/globals.css'
import 'styles/tailwind.css'
import {Toaster} from 'react-hot-toast'
function MyApp({ Component, pageProps }) {
     return (
          <TaskProvider>
               <Component {...pageProps} />
               <Toaster/>
          </TaskProvider>
     )
}

export default MyApp
