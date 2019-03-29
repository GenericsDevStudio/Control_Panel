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
            if (true) {
                document.location.href = "index.html";
            }
        }
    }
});
