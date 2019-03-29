
new Vue({
    el: '.menu_app',
    data: {
        menuButtons: [
            { title: "Main", access: ""},
            { title: "Workspace", access: ""},
            { title: "Projects", access: ""},
            { title: "Statistics", access: ""},
            { title: "Apps", access: ""},
            { title: "Admin Panel", access: ""},
            { title: "Blog", access: ""},
            { title: "Log Out", access: ""} ],
        show_list: false
    },
    methods: {
        menuTrigger(action) {
            if(action) {
                this.$refs.menu.style.width = "250px";
                this.$refs.openMenuButton.style.marginLeft = "250px";
                this.show_list = true;
                //document.getElementById("mySidenav").style.width = "250px";
                //document.getElementById("main").style.marginLeft = "250px";
                document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
            } else {
                this.$refs.menu.style.width = "0";
                this.$refs.openMenuButton.style.marginLeft = "0";
                this.show_list = false;
                //document.getElementById("mySidenav").style.width = "0";
                //document.getElementById("main").style.marginLeft = "0";
                document.body.style.backgroundColor = "white";
            }
        }
    }
});

