export class unexpetedError extends Error {
    constructor (message = "Error inesperado.") {
        super();
        this.name = 'unexpetedError';
        this.message = message;
    };
};