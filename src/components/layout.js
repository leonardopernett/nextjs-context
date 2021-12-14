import Head from "next/head"
import Navbar from "./navbar"

export default function Layout({ children, title }) {
  return (
    <div className="bg-gray-300  h-screen">
      <Head>
        <title>{ title }</title>
      </Head>
      <Navbar/>
      <main  className="px-20 py-5">
        { children }
      </main>
    </div>
  )
}
