import { Server } from "./routes/server"

export class RoomApp {
    server?: Server;

    async start() {
        const port = process.env.PORT || "3000";
        this.server = new Server(port);
        return this.server.listen();
    }

    async stop() {
        return this.server.stop();
    }

    get httpServer() {
        return this.server.getHTTPServer();
    }
}