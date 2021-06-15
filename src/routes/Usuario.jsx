import React, { useEffect, useState } from "react"
import "./routerStyle.css"
import axios from "axios"

const Usuario = () => {
    let [users, setUsers] = useState([])
    const axiosCofig = {
        headers: {
            Authorization: ""
        }
    }
    const handleGetToken = () => {
        setUsers([])
        let authToken = localStorage.getItem("token")
        axiosCofig.headers.Authorization = "Bearer " + authToken
        handleGetUsers()
    }
    const handleGetUsers = () => {
        axios.get("http://localhost:8080/usuarios", axiosCofig)
            .then(response => {
                if (response.status === 200) {
                    setUsers(response.data.data)
                } else {
                    console.log(response)
                }
            })
            .catch(err => {
                alert(err)
            })
    }
    useEffect(handleGetToken, [])
    return (
        <div>
            <h2>Lista de usuários</h2>
            {users.map(user => {
                return (
                    <div key={user.id_usuario}>
                        <h2>{user.nome}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default Usuario