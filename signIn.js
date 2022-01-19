function signIn(user) {
    let savedPassword;
    let { email, password } = user;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == email) {
            savedPassword = users[i].password;
        } {
            return 'you need to sign up first'
        }
    }
    if (password == savedPassword) {
        return 'you are logged in successfully'
    }
    else {
        return 'your password is incorrect'
    }
}