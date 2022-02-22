let socket = null;

export default class SocketManager {
    static setSocket = (_socket) => {
        return socket = _socket
    }

    static getSocket = () => {
        return socket
    }
}
