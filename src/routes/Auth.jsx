import React from "react"
import axios from "axios"
import "./routerStyle.css"

const Auth = () => {
    const handleToken = () => {
        axios.post("http://localhost:8080/auth", {
            email: "root@root",
            pass: "root"
        }).then(response => {
            if (response.status == 200)
                localStorage.setItem("token", response.data)
        })
            .catch(err => {
                alert(err)
            })
    }
    return (
        <div>
            <h2>Obtenha seu token</h2>
            <input type="email" />
            <input type="password" />
            <button onClick={handleToken}>Obter</button>
        </div>
    )
}

export default Auth;