import app from "./src/app.js"

const port = process.env.PORT || 3000; // Ambiente de produção x Local
app.listen(port, () => {
    console.log(`// Server Listening in: http://localhost:${port}`);
})