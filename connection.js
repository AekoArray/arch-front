// Decorator class made for giving request URL's into html's
class Connection {
    env
    test = 'localhost'
    prod = '84.201.163.74'

    constructor(env) {
        this.env = env;
    }

    getWebsocketConnection(){
        if (this.env === 'test'){
            return 'wss://' + this.test + ':8080'
        } else if (this.env === 'prod') {
            return 'wss://' + this.prod + ':8080'
        }
    }

    getAuthServiceConnection() {
        if (this.env === 'test'){
            return 'http://' + this.test + ':8081'
        } else if (this.env === 'prod') {
            return 'http://' + this.prod + ':8081'
        }
    }

    getStorageServiceConnection() {
        if (this.env === 'test'){
            return 'http://' + this.test + ':8080'
        } else if (this.env === 'prod') {
            return 'http://' + this.prod + ':8080'
        }
    }
}