let targetUserName = "";
let userNameList = [];

export default class ChatManager {
    static setTargetUserName = (_userName) => {
        targetUserName = _userName
    }

    static getTargetUserName = () => {
        return targetUserName
    }

    static setUserNameList = (_userNameList) => {
        userNameList = _userNameList
    }

    static getUserNameList = () => {
        return userNameList
    }
}
