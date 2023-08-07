import {useContext} from 'react'
import { UserContext } from '../../context/userContext'

export default function Dashboard() {
    const {user} = useContext(useContext)
  return (
    <div>
       <h1>Dashboard</h1>
       {!!user && (<h1>Witaj {user.name}! </h1> )}
    </div>
  )
}
