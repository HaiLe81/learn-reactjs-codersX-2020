// import { messages } from '../config/globals';

export const RequestException = function(status, message) {
    this.status = status
    this.message = message
}