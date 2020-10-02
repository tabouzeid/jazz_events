import React from 'react';
// const currentPassRef = useRef();
// const errorMsgRef = useRef();
// const [currentPass, setCurrentPass] = useState("");
// const [errorMsg, setErrorMsg] = useState("");

// if (currentPass.current.value !== props.password) {
//     setErrorMsg("Current password is incorrect.")
// }

//if newUsername == props.username, error "That already IS your username"
//if newUsername already exists in database && is !== props.username, error "That username is already taken."
//if after debounce (currentPass.current.value !== props.password), set span to "Current password is incorrect."
//if (newEmail does not take the form ("letters/numbers/-/. not ending in -/."+"@"+"letters/numbers/-/. not ending in -/."+"."+"letters")), set span to "must be a valid email"
//if after debounce (newPassword.current.value !== reenterNewPassword), set span to "Passwords do not match."

//userID will be passed in. Fetch user info from database using ID. Store user info in "state"

const updateSettings = (event) => {
    //event.target.username.value will give you whats inside the field named "username"(line 41(right now))
}
export default function UserProfilePage() {

    return (
        <div>
            <form onSubmit={updateSettings}>
                <h1>User Settings</h1>

                <h3>Change email</h3>
                    Current email: <b>taher@taher.com</b><br />
                <label for="oldPass">New email:</label>
                <input type="text" id="newEmail" name="email"
                    minlength="8" required /><br />

                <h3>Change username</h3>
                    Current username: <b>taher</b><br />
                <label for="oldPass">New username:</label>
                <input type="text" id="newUsername" name="username"
                    minlength="8" required /><br />

                <h3>Change password</h3>
                <label for="currentPassword">Current password:</label>
                <input type="password" id="currentPassword" name="currentPassword"
                    minlength="8" required /><br />
                <span id="currentPasswordTest" ></span>
                <label for="newPassword">New password:</label>
                <input type="password" id="newPassword" name="newPassword"
                    minlength="8" required /><br />
                <label for="reenterNewPassword">Re-enter new password:</label>
                <input type="password" id="reenterNewPassword" name="reenterNewPassword"
                    minlength="8" required />
            </form>
        </div>
    );

}