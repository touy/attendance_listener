// ts/server.ts
import app from "./app";
const PORT = 8865;

app.server.listen(PORT,"0.0.0.0", () => {
    console.log('attendance server listening on port ' + PORT);
});
