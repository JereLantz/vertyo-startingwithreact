export default function LoginMsg({isLoggedIn}){
    return <div><h2>{isLoggedIn ? "Welcome back!" : "Please log in"}</h2></div>
}
