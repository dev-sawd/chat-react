let userName = "";

export default class LoginManager {
    static setUserName = (_userName) => {
        return userName = _userName
    }

    static getUserName = () => {
        return userName
    }
}
