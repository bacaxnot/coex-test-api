import { App } from "./app";

const PORT = 3000

async function main() {
    const app = new App(PORT)
    await app.listen()
}

main()