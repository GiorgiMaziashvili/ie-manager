import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'
import { useEffect } from 'react'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  useEffect(()=>{
    window.location.href = 'https://ie-manager-back.onrender.com/api/notion/connect'
  }, [])
  // const { isPending, error, data } = useQuery({
  //     queryKey: ['repoData'],
  //     queryFn: () =>
  //     axios.get('https://ie-manager-back.onrender.com/api/notion/connect',{
  //         headers: {
  //             "x-user-id": "user_123"
  //         }
  //     }).then((res) => {
  //         console.log(res.data)
  //     }),
  // })
  // console.log(data)
  // if (isPending) return 'Loading...'

  // if (error) return 'An error has occurred: ' + error.message

  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <img
          src={logo}
          className="h-[40vmin] pointer-events-none animate-[spin_20s_linear_infinite]"
          alt="logo"
        />
        <p>
          Edit <code>src/routes/index.tsx</code> and save to reload.
        </p>
        <a
          className="text-[#61dafb] hover:underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="text-[#61dafb] hover:underline"
          href="https://tanstack.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn TanStack
        </a>
      </header>
    </div>
  )
}
