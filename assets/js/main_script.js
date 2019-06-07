/*function getUserFromStorage() {
    return JSON.parse(localStorage.getItem('user'));
};*/

var menu_app = new Vue({
    el: '.menu_app',
    data: {
        menuList: [
            { title: "Main", access: "None", controller: "main_section", image: "fas fa-home"},
            { title: "Workspace", access: "None", controller: "workspace_section", image: "far fa-clipboard"},
            { title: "Projects", access: "None", controller: "projects_section", image: "fas fa-thumbtack"}, // fas fa-tasks
            { title: "Statistics", access: "None", controller: "statistics_section", image: "fas fa-chart-pie"},
            { title: "Team", access: "None", controller: "team_section", image: "fas fa-users"},
            { title: "Apps", access: "Admin", controller: "apps_section", image: "fas fa-mobile"},
            { title: "Admin Panel", access: "Admin", controller: "admin_section", image: "fas fa-sitemap"}, // far fa-keyboard
            { title: "Blog", access: "Blogger", controller: "blog_section", image: "far fa-newspaper"},
            /*{ title: "Settings", access: "None", controller: "settings_section"},*/
            { title: "Log Out", access: "None", controller: "log_out", image: "fas fa-home"} ],
        show_list: false,
        page: "Main",
        currentSection: 'Main',
        //currentUser: getUserFromStorage()
    },
    methods: {
        menuTrigger(action) {
            
            /*http.get('https://api.coindesk.com/v1/bpi/currentprice.json')
              .then(response => console.log("Yess"))*/
            
            if (action) {
                this.$refs.menu.style.width = "250px";
                this.$refs.openMenuButton.style.marginLeft = "250px";
                this.show_list = true;
                //this.$refs.blured_space.style.display = true;
                $(".blured_space").css("display", "block");
                //$(".window").style.backgroundColor = "rgba(0,0,0,0.4)";
                //$(".window").css("background", "rgba(0,0,0,0.4)");
                //$(".container-fluid").css("background", "rgba(0,0,0,0.4)");
            } else {
                this.$refs.menu.style.width = "0";
                this.$refs.openMenuButton.style.marginLeft = "0";
                this.show_list = false;
                $(".blured_space").css("display", "none");
                //this.$refs.blured_space.style.display = false;
                //$(".window").style.backgroundColor = "white";
                //$(".window").css("background", "white");
                //$(".container-fluid").css("background", "white");
            }
        },

        onMenuBtnClick(section, title) {
            //alert(section);
            this.currentSection = title;
            if(section == "log_out") {      
                axios.get('http://control.generics.space/api', {
                    params: {
                        logOut: {}
                    }
                }).then(response => {
                    console.log(response.data);
                    if (response.data == "1") {
                        document.location.href = "index.php";
                    }
                });
            } else {
                page_app.$data.currentSection = section;
                this.menuTrigger(false);
            }
        }
    }
});


// Page Controller //

var page_app = new Vue({
    el: '.page_app',
    data: {
        currentSection: 'main_section'
    },
    methods: {
        
    }
});


const http = axios.create({
    baseURL: './'
})
  

// Comments //

/*
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";

    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    
   //router
*/

/* function getTemplateData(templateName) {
    console.log("in");
    var div = document.createElement('div');
    $div.load('1.txt');
    $
    alert(data.html());
    return '<div>Yeha</div>';
}; */

/*

const Main = new Vue({
    template: "#main"
})

const Workspace = new Vue({
    template: "#workspace"
})
*/

/*
const routes = [
    { path: '/Main', component: Main },
    { path: '/Workspace', component: Workspace },
    { path: '/Workspace', component: Projects }
];

const router = new VueRouter({
  routes 
});*/
