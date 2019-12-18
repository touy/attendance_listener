"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ts/server.ts
const app_1 = require("./app");
const PORT = 8865;
app_1.default.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});
//# sourceMappingURL=server.js.map