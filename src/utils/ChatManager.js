let targetUserName = "";

export default class ChatManager {
    static setTargetUserName = (_userName) => {
        return targetUserName = _userName
    }

    static getTargetUserName = () => {
        return targetUserName
    }
}
