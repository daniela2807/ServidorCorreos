const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const details = require("./details.json");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("The server started on port 3000 !!!!!!");
});

app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center'>Wellcome to FunOfHeuristic <br><br>😃👻😃👻😃👻😃👻😃</h1>"
  );
});

app.post("/sendmail", (req, res) => {
  
  const {Nombre, Apellido, Correo, Asunto, Mensaje} = req.body;

  contentHTML = `
  <h1>UserInformation</h1>
  <ul>
    <li> Nombre ${Nombre}</li>
    <li> Mensaje ${Mensaje}</li>
  </ul>
  ` ;
  console.log(contentHTML);
  // console.log("request came");
  // let contact = req.body;
  // sendMail(user, info => {
  //   console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
  //   res.send(info);
  // });
});

// async function sendMail(user, callback) {
//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "dany_julio28@hotmail.com",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: details.email,
//       pass: details.password
//     }
//   });

//   let mailOptions = {
//     from: `${user.Correo}`, // sender address
//     to: user.Correo, // list of receivers
//     subject: "Wellcome to Fun Of Heuristic 👻", // Subject line
//     html: `<h1>Hi ${user.Nombre}</h1><br>
//     <h4>Thanks for joining us</h4>`
//   };

//   // send mail with defined transport object
//   let info = await transporter.sendMail(mailOptions);

//   callback(info);
// }

// main().catch(console.error);
