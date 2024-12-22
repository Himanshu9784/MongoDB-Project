const mongoose = require('mongoose');
const Chat = require("./models/chat.js");
main()
    .then(() =>{
        console.log("connection sucessful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchat =[{
    from: "neha",
    to: "priya",
    msg: "Hello",
    created_at: new Date(),
},
{
    from: "Ashish",
    to: "payel",
    msg: "Hii",
    created_at: new Date(),
},
{
    from: "kapil",
    to: "ratan",
    msg: "bye",
    created_at: new Date(),
},
{
    from: "Hima",
    to: "nshu",
    msg: "friend",
    created_at: new Date(),
},
{
    from: "anuj",
    to: "mitali",
    msg: "love",
    created_at: new Date(),
},
];

Chat.insertMany(allchat);
