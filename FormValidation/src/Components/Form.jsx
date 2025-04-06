import {useState} from 'react'
import '../style.css'

const Form = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [errorUserName, setErrorUserName] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorPasswordConfirm, setErrorPasswordConfirm] = useState('')

    const [userColor, setUserColor] = useState('')
    const [emailColor, setEmailColor] = useState('')
    const [passwordColor, setPasswordColor] = useState('')
    const [confirmPasswordColor, setConfirmPasswordColor] = useState('')

    const validate = (e) => {
        e.preventDefault();

        if (username.length > 8) {
            setUserColor('green');
            setErrorUserName('');
        } else {
            setUserColor('red')
            setErrorUserName('Username must be at least 8 letters long!')
        }

        if (email.length > 10 && (email.includes('@gmail.com') || email.includes('@yahoo.com'))) {
            setErrorEmail('');
            setEmailColor('green');
        } else {
            setErrorEmail('Enter a valid email address!');
            setEmailColor('red');
        }

        if (password.length > 8) {
            setErrorPassword('');
            setPasswordColor('green');
        } else {
            setErrorPassword('Password must be at least 8 letters long!')
            setPasswordColor('red');
        }

        if (confirmPassword === password) {
            setErrorPasswordConfirm('');
            setConfirmPasswordColor('green');
        } else {
            setErrorPasswordConfirm("Password didn't match!")
            setConfirmPasswordColor('red');
        }

    }

    return (
        <>
            <div className="card">
                <div className="card-image"></div>

                <form>
                    <input
                        type="text"
                        placeholder="Name"
                        style={{borderColor: userColor}}
                        value={username}
                        onChange={(e) => setUsername(e.currentTarget.value)}/>

                    <p className="error">{errorUserName}</p>

                    <input type="email"
                           placeholder="Email"
                           style={{borderColor: emailColor}}
                           value={email}
                           onChange={e => setEmail(e.currentTarget.value)}/>

                    <p className="error">{errorEmail}</p>

                    <input type="password"
                           placeholder="Password"
                           style={{borderColor: passwordColor}}
                           value={password}
                           onChange={e => setPassword(e.currentTarget.value)}/>

                    <p className="error">{errorPassword}</p>

                    <input type="password"
                           placeholder="Confirm Password"
                           style={{borderColor: confirmPasswordColor}}
                           value={confirmPassword}
                           onChange={e => setConfirmPassword(e.currentTarget.value)}/>

                    <p className="error">{errorPasswordConfirm}</p>

                    <button className="submit-btn" onClick={validate}>Submit</button>

                </form>
            </div>
        </>
    )
}
export default Form
