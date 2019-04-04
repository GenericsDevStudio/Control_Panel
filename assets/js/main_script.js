var menu_app = new Vue({
    el: '.menu_app',
    data: {
        menuList: [
            { title: "Main", access: "", controller: "main_section"},
            { title: "Workspace", access: "", controller: "workspace_section"},
            { title: "Projects", access: "", controller: "projects_section"},
            { title: "Statistics", access: "", controller: "statistics_section"},
            { title: "Team", access: "", controller: "team_section"},
            { title: "Apps", access: "", controller: "apps_section"},
            { title: "Admin Panel", access: "", controller: "admin_section"},
            { title: "Blog", access: "", controller: "blog_section"},
            { title: "Settings", access: "", controller: "settings_section"},
            { title: "Log Out", access: "", controller: "log_out"} ],
        show_list: false,
        page: "Main",
        currentSection: 'main_section'
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

        onMenuBtnClick(section) {
            //alert(section);
            this.currentSection = section;
            if(section == "log_out") {      
                // TODO
                document.location.href = "login_page.html";
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
