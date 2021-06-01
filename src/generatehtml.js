function logo(role) {
  if (role === "Manager") {
    return `<i class="fas fa-mug-hot"></i>`;
  } else if (role === "Engineer") {
    return `<i class="fas fa-glasses"></i>`;
  }
  return `<i class="fas fa-user-graduate"></i>`;
}

function extrafieldLogo(role) {
  if (role === "Manager") {
    return `<i class="fas fa-phone-alt"></i>`;
  } else if (role === "Engineer") {
    return `<i class="fab fa-github"></i>`;
  }
  return `<i class="fas fa-school"></i>`;
}

function addCard(data) {
  const arrayOfCards = data.map(function (teamObj) {
    return ` <div class="col my-4 d-flex justify-content-center">
        <div class="card" style="width: 18rem">
          <div class="card-header custom-header-color text-white">
            <h5>${teamObj.name}</h5>
            <h5 class="card-title"> 
            ${logo(teamObj.role)} ${teamObj.role}</i> 
            </h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>ID :</strong> ${
                teamObj.id
              }</li>
              <li class="list-group-item">
                <i class="fas fa-envelope"></i> :
                <a href="mailto:${teamObj.email}">${teamObj.email}</a>
              </li>
              <li class="list-group-item">
                ${extrafieldLogo(teamObj.role)} : ${teamObj.extrafield}
              </li>
            </ul>
          </div>
        </div>
      </div>`;
  });

  //   const finalCard = arrayOfCards.join("\n");
  return arrayOfCards.join("\n");
}

function templateHtml(data) {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="Description" content="Enter your description here" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
        />
        <script
          src="https://kit.fontawesome.com/3291b69a63.js"
          crossorigin="anonymous"
        ></script>
        <link rel="stylesheet" href=${__dirname}/style.css />
        <title>My Team</title>
      </head>
    
      <body>
        <header class="container-fluid custom-header-color text-light mb-5 p-3">
          <div class="d-flex justify-content-center text-white">
            <h1>
              <i class="fas fa-users"></i> Team Dashboard
              <i class="fas fa-users"></i>
            </h1>
          </div>
        </header>
        <section class="container my-5">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        ${addCard(data)}
        </div>
        </section>
        </body>
      </html>`;
}

module.exports = templateHtml;
