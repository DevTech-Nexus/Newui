export default function Logout() {

    const logout = async () => {
        window.location.href = '/home';
        try {
            const response = await fetch("http://localhost:8082/users/logout", 
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json;"
                  }
            });
            const reply = await response.text();
            localStorage.removeItem('user');
        }
        catch (err) {
            console.log(err);
        }
    }
    logout();
}