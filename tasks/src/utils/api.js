class Api {
    constructor({ address }) {
        // стандартная реализация — объект options
        this._address = address;
        this.initialize();
    }

    initialize() {
        // В реальном приложении этого метода не будет
        const items = localStorage.getItem(storageKey);
        if (!items) {
            this.reset();
        }
    }

    reset() {
        // В реальном приложении этого метода не будет
        localStorage.setItem(storageKey, JSON.stringify(sampleData));
    }

    getTasks(token) {
        // В реальном приложении здесь будет обращение к API tasks service
        return JSON.parse(localStorage.getItem(storageKey));
    }

    checkedChanged(token, id, checked) {
        // В реальном приложении здесь будет обращение к API tasks service
        const tasks = JSON.parse(localStorage.getItem(storageKey));
        localStorage.setItem(
            storageKey,
            JSON.stringify(
                tasks.map((x) =>
                    x.id === id
                        ? {
                              id: x.id,
                              title: x.title,
                              checked: checked,
                          }
                        : x,
                ),
            ),
        );
    }
}

const api = new Api({
    //address: 'http://localhost:3001',
    address: 'https://bv-dev.ru',
});

export default api;