new Vue({
    el: '.login_app',
    data: {
        email: "",
        password: "",
        saveUserToStorage: false
    },
    methods: {
        sendLoginQuery() {
            console.log(this.email + " " + this.password + " " + this.saveUserToStorage);
            axios.get('http://control.generics.space/api', {
                params: {
                    logIn: {login: this.email, password: this.password}
                }
            }).then(response => {
                console.log(response.data);
                console.log("Name" + response.data.name)
                if (response.data.name != "null") {
                    localStorage.setItem('user', JSON.stringify(response.data));
                    document.location.href = "index.php";
                }
            });
            /*
               if (true) {
                document.location.href = "index.php";
               }*/
        }
    }
}); 
