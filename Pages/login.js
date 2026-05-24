export default function Login() {
  return /*html*/ `
  
   <main class="page-center">
    <section class="auth-container">

      <h1>Log in</h1>

       <form class="auth-form" id="login-form">

       <div>


     <label for="email">Email</label>

     <input class="input-field"
     type="email"
     id="email"
     name="email"
     placeholder="Email"
        required/>

     </div>

     <div>
     <label for="password">Password</label>

     <input class="input-field"
     type="password"
     id="password"
     name="password"
     placeholder="Password"
     required
     />

     </div>

     <p id="login-error"></p>

     <button class="btn">Log in</button>

     <a href="#" class="forgot-password">Forgot password?</a>

     </form>

   </section>

   </main>
 `;
}

export function initLogin() {
  const form = document.getElementById("login-form");
  const errorMessage = document.getElementById("login-error");

  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    errorMessage.textContent = "";

    try {
      const response = await fetch("https://v2.api.noroff.dev/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.errors?.[0]?.message || "Login failed");
      }

      localStorage.setItem("token", data.data.accessToken);
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: data.data.name,
          email: data.data.email,
          avatar: data.data.avatar,
        }),
      );

      window.location.hash = "#/";
    } catch (error) {
      errorMessage.textContent = error.message;
    }
  });
}
