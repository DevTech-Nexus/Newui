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
            console.log(reply);
            localStorage.removeItem('user');
            window.location.href = '/login';
        }
        catch (err) {
            console.log(err);
        }
    }

    return logout;
}