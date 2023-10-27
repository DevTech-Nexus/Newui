export default function Logout() {
    window.location.href = '/home';
    sessionStorage.removeItem('user');
    const logout = async () => {
        try {
            const response = await fetch("https://expertmobile-userservice.azurewebsites.net/users/logout", 
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json;"
                  }
            });
            const reply = await response.text();
            
        }
        catch (err) {
            console.log(err);
        }
    }
    logout();
}