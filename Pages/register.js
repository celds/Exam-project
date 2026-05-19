export default function Register() {
  return /*html*/ ` 

    <main class="page-center">
    <section class="auth-container">

    <h1>Create an account</h1>

    <form class="auth-form">
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

    <button class="btn type="submit"> Create account</button>

    </form>
    <p> Already have an account? <a href="/login">Login</a>
    </p>
    
    </section>
    </main>

    `;
}
