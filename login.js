login
const users = [{ username: "alex", password: "1234" }];

function login(user, pass) {
  const found = users.find(u => u.username === user && u.password === pass);
  if (found) {
    console.log("Login correcto");
  } else {
    console.log("Credenciales inválidas");
  }
}

login("alex", "1234");
