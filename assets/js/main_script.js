/* function getTemplateData(templateName) {
    console.log("in");
    var div = document.createElement('div');
    $div.load('1.txt');
    $
    alert(data.html());
    return '<div>Yeha</div>';
}; */

const Main = { template: '#main' };
const Workspace = { template: '<div>Workspace</div>' };

const routes = [
  { path: '/Main', component: Main },
  { path: '/Workspace', component: Workspace }
];

const router = new VueRouter({
  routes 
});


var menu_app = new Vue({
    el: '.menu_app',
    data: {
        menuList: [
            { title: "Main", access: ""},
            { title: "Workspace", access: ""},
            { title: "Projects", access: ""},
            { title: "Statistics", access: ""},
            { title: "Team", access: ""},
            { title: "Apps", access: ""},
            { title: "Admin Panel", access: ""},
            { title: "Blog", access: ""},
            { title: "Settings", access: ""},
            { title: "Log Out", access: ""} ],
        show_list: false,
        page: "Main"
    },
    methods: {
        menuTrigger(action) {
            if (action) {
                this.$refs.menu.style.width = "250px";
                this.$refs.openMenuButton.style.marginLeft = "250px";
                this.show_list = true;
                document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
            } else {
                this.$refs.menu.style.width = "0";
                this.$refs.openMenuButton.style.marginLeft = "0";
                this.show_list = false;
                document.body.style.backgroundColor = "white";
            }
        },

        onMenuBtnClick(pageTitle) {
            alert(pageTitle);
            page_app.$data.page = pageTitle;
        }
    },
    router
});

var page_app = new Vue({
    el: '.page_app',
    data: {
        page: "Main"
    },
    methods: {
        changePageContent(pageTitle) {
            this.page = pageTitle;
            alert("Page");
        }
    },
    router
});

// Page Controller //



// Comments //

/*
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";

    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
*/
