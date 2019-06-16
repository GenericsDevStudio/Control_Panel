Vue.component('main_section', {
    template: '#main-template'
})

Vue.component('workspace_section', {
    template: '#workspace-template',
    mounted: function() {
        
        var draw_field = document.getElementById("draw_field");
        var context = draw_field.getContext("2d");

        var isMouseClicked = false;
        var startX, startY;
        
        var kX = draw_field.getBoundingClientRect().left;
        var kY = draw_field.getBoundingClientRect().top;

        draw_field.onmousedown = function (e) {
            isMouseClicked = true;
            startX = e.clientX - kX;
            startY = e.clientY - kY;
        }

        draw_field.onmousemove = function (e) {
            if (isMouseClicked) {
                context.beginPath();
                context.moveTo(startX, startY);
                context.lineTo(e.clientX - kX, e.clientY - kY);
                context.stroke();
                startX = e.clientX - kX;
                startY = e.clientY - kY;
            }
        }

        draw_field.onmouseup = function (e) {
            isMouseClicked = false;
        }


    }
})

Vue.component('projects_section', {
    template: '#projects-template'
})

Vue.component('statistics_section', {
    template: '#statistics-template'
})

Vue.component('team_section', {
    template: '#team-template'
})

Vue.component('apps_section', {
    template: '#apps-template'
})

Vue.component('admin_section', {
    template: '#admin-template',
    data: function () {
        return {
            name: "",
            email: "",
            position: "",
            access: "",
            skills: "",
        }
    },
    methods: {
        addNewUser() {
            axios.get('http://control.generics.space/api', {
                params: {
                    addUser: {
                        name: this.name,
                        email: this.email,
                        position: this.position,
                        access: this.access,
                        skills: this.skills
                    }
                }
            }).then(response => {
                console.log(response.data);
                if (response.data == "1") {
                    console.log("YESS");
                }
            });
        }
    }
})

Vue.component('blog_section', {
    template: '#blog-template'
})

Vue.component('settings_section', {
    template: '#settings-template'
})
