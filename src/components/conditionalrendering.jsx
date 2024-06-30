
function Greeting(props) {

    // if (props.isLoggedIn) {
    //     return (
    //         <div>
    //             <h2>Welcome {props.username}</h2>
    //         </div>
    //     )
    // }
    // else {
    //     return (
    //         <div>
    //             <h2>
    //                 Plz Log In
    //             </h2>
    //         </div>
    //     )
    // }

    return (props.isLoggedIn ? <h2>Welcome {props.username}</h2> : <h2>Log In to continue</h2>)

}

export default Greeting
