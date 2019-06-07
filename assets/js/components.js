Vue.component('main_section', {
    template: '#main-template'
})

Vue.component('workspace_section', {
    template: '#workspace-template'
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
