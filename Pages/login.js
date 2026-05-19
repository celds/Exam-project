export default function Login() {
  return /*html*/ `
   <main class="page-center">
    <section class="auth-container">

     <h1>Log in</h1>

     <form class="auth-form">

     <div>
     <label for="email">Email</label>

     <input class="input-field"
     type="email"
     id="email"
     name="email"
     placeholder="Email address"
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

     <button class="btn">Log in</button>

     <a href="#" class="forgot-password">Forgot password?</a>

     </form>
   </section>
   </main>
 `;
}
