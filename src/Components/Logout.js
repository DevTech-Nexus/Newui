export default function Logout() {

    const logout = async () => {
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
            window.location.href = '/home';
        }
        catch (err) {
            console.log(err);
        }
    }
    logout();
}