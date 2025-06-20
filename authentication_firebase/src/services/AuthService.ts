import { ref,Ref } from "vue";
class AuthService {
    private jwt: Ref<string>;
    private error: Ref<string>;
    constructor() {
        this.jwt = ref("");
        this.error = ref("");
    }

    getJwt(): Ref<string> {
        return this.jwt;
    }

    getError(): Ref<string> {
        return this.error;
    }

    async login(email: string, password: string): Promise<boolean> {
        try {
            const rest = await fetch("https://example.com/api/login", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: email, password: password })
            })

            const response = await rest.json();

            if('error' in response) {
                this.error.value = "Login failed: "
                return false;
            }
            this.jwt.value = response.data.access_token;
            // $session.start(); // Start a session
            // $session.set('jwt', this.jwt.value); // Store JWT in session
            return true;
        } catch (error) {
            this.error.value = "An error occurred during login.";
            console.log("Login error:", error);
            return false;
        }
    }
}

export default AuthService;