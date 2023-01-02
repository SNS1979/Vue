const app = {
    data() {
        return {
            title: "Список заметок",
            count: 35
        }
    }
}

Vue.createApp(app).mount(".notes")