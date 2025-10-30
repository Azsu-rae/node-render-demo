const express = require("express")
const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("\n Bonjour depuis Render!");
});
app.listen(PORT, () => {
    console.log(`Serveur lance sur le port ${PORT}`);
})
