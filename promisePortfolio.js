const inquirer = require("inquirer");
const fs = require("fs");

module.exports = () => {
  inquirer
    .prompt([
      { name: "name", message: "What is your name? ", default: "N/A" },
      {
        name: "street",
        message: "What is your street address?",
        default: "N/A",
      },
      { name: "city", message: "What city do you live at?", default: "N/A" },
      { name: "state", message: "What state?", default: "N/A" },
      { name: "zipcode", message: "What is your zipcode?", default: "N/A" },
      { name: "bio", message: "Tell me about yourself:", default: "N/A" },
      { name: "linkedin", message: "Enter your Linkedin URL:", default: "N/A" },
      { name: "github", message: "Enter your GitHub URL:", default: "N/A" },
    ])
    .then((answers) => {
      const {
        name,
        street,
        city,
        state,
        zipcode,
        bio,
        linkedin,
        github,
      } = answers;

      const htmlContent = `<!DOCTYPE html>
    <html>
      <head>
        <link
          rel="stylesheet"
          href="./font-awesome-4.7.0/css/font-awesome.min.css"
        />
        <title>Software Engineer Portfolio</title>
        <style>
          div.container {
            display: flex;
            background-color: #000051;
            color: #80d8ff;
            border: 4px solid;
            border-radius: 6px;
            max-width: 100%;
            height: 400px;
          }
          div.column1 {
            flex: 50%;
            padding: 20px;
          }
          div.column2 {
            flex: 50%;
            padding: 20px;
            border-left: 4px solid;
          }
          div.flex {
            display: flex;
            flex-direction: column;
          }
          div.nameTitle {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          p.name {
            font-size: 30px;
            margin-bottom: -8px;
          }
    
          p.title {
            font-size: 15px;
          }
          div.center {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          div.location {
            display: flex;
            flex-direction: row;
            align-items: baseline;
            font-size: 15px;
          }
          div.address {
            display: flex;
            flex-direction: column;
            margin-left: 10px;
          }
          p.street,
          p.city {
            margin-bottom: -15px;
          }
          div.github,
          div.linkedin {
            display: flex;
            flex-direction: row;
            align-items: baseline;
          }
          p.gitUrl,
          p.linkedinUrl {
            margin-left: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="column1 flex">
            <div class="nameTitle">
              <p class="name">${name}</p>
              <p class="title">Software Engineer</p>
            </div>
            <div class="location">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <div class="address">
                <p class="street">${street}</p>
                <p class="city">${city}, ${state}</p>
                <p class="zipcode">${zipcode}</p>
              </div>
            </div>
            <div class="github">
              <i class="fa fa-github" aria-hidden="true"></i>
              <p class="gitUrl">${github}</p>
            </div>
            <div class="linkedin">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
              <p class="linkedinUrl">${linkedin}</p>
            </div>
          </div>
          <div class="column2 center">
            <p class="bio">
              ${bio}
            </p>
          </div>
        </div>
      </body>
    </html>
    
    `;

      fs.appendFile("result.html", htmlContent, (err) => {
        if (err) throw err;
        console.log(
          "Your portfolio is ready! please refer to result.html file."
        );
      });
    });
};
