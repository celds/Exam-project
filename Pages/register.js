export default function Register() {
  return /*html*/ ` 

    <main class="page-center">
    <section class="auth-container">

    <h1>Create an account</h1>

    <form class="auth-form" id="register-form">
    <div>
    <label for="name">Name</label>
    <input class="input-field"
    type="text"
    id="name" 
    name="name"
    placeholder="name"
    required/>
    </div>

    <div>
    <label for="email">Email</label>
    <input class="input-field"
    type="email"
    id="email"
    name="email"
    placeholder="email"
    required/>
    </div>

    <div>
    <label for ="password">Password</label>
    <input class="input-field"
    type="password"
    id="password"
    name="password"
    placeholder="Password"
    required/>
    </div>

    <p> By creating an account you agree to terms and conditions and User privacy notice</p>

    <button class="btn" type="submit"> Create account</button>

    </form>
    <p> Already have an account? <a href="/login">Login</a>
    </p>
    
    </section>
    </main>

    `;
}

export function initRegister() {
  const form = document.querySelector("#register-form ");

  if (!form)return;

  form.addEventListener("submit", async (event) =>{
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value;

    try{
      const response = await fetch("https://v2.api.noroff.dev/auth/register",{
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
      })
   });

   const data = await response.json();

   if (!response.ok) {
    alert(data.errors?.[0]?.message || "registration failed");
    return;
   }

   console.log("user was created:", data);

   window.location.href = "/login";

  }catch (error) {
    console.error(error);
    alert("something went wrong");
  }
});
}
