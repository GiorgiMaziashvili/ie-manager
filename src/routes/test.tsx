import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import axios from 'axios'

export const Route = createFileRoute('/test')({
  component: RouteComponent,
})

function RouteComponent() {
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
        axios.get('https://ie-manager-back.onrender.com/api/notion/connect',{
            headers: {
                "x-user-id": "user_123"
            }
        }).then((res) => {
            console.log(res.data)
        }),
    })
    console.log(data)
    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    return <div>Hello "/test"!</div>
}
