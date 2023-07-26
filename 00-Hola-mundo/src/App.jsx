import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

export function App () {
  const fromatUserName = (userName) => `@${userName}`
  return(
    <section className="App">
    
    <TwitterFollowCard 
     fromatUserName={fromatUserName}
     isFollowing userName="luqilavllen" 
     name="lucas lavallen" />

    <TwitterFollowCard
    fromatUserName={fromatUserName}
    isFollowing={false}
    userName="roman"
    name=" rojas"/>

    <TwitterFollowCard      
    fromatUserName={fromatUserName}
    isFollowing
    userName="fede"
    name="bojas"/>
    </section>
  )
  
}

