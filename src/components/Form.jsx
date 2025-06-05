import React, {useState} from 'react'
import '../styles/form.css'

const Form = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [errorUsername, setErrorUsername] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')

    const [userColor, setUserColor] = useState('')

    const validate = e => {
        e.preventDefault()

        username.length > 6
            ? (setErrorUsername(''), setUserColor('green'))
            : (setErrorUsername("Username must contain at least 8 characters"), setUserColor('red'))

        email.includes("@gmail.com")
            ? (setErrorEmail(''), setUserColor('green'))
            : (setErrorEmail("Email should contain @gmail.com"), setUserColor('red'))

        password.length > 8
            ? (setErrorPassword(''), setUserColor('green'))
            : (setErrorPassword("Password should contain at least 8 characters"), setUserColor('red'))

        password === confirmPassword
            ? (setErrorConfirmPassword(''), setUserColor('green'))
            : (setErrorConfirmPassword("Password doesn't match"))

    }

    return (
        <>
            <div className="card">
                <form>
                    <input type="text" placeholder="Name" style={{borderColor: userColor}} value={username} onChange={(e) => setUsername(e.target.value)} />
                    <p className="error">{errorUsername}</p>

                    <input type="text" placeholder="Email" style={{borderColor: userColor}} value={email} onChange={(e) => setEmail(e.target.value)} />
                    <p className="error">{errorEmail}</p>

                    <input type="text" placeholder="Password" style={{borderColor: userColor}} value={password} onChange={(e) => setPassword(e.target.value)} />
                    <p className="error">{errorPassword}</p>

                    <input type="text" placeholder="Confirm Password" style={{borderColor: userColor}} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <p className="error">{errorConfirmPassword}</p>

                    <button className="submitbtn" onClick={validate}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Form
