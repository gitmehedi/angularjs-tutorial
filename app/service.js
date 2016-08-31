

app.service('libService', [function () {
        this.libArra = [
            {sn: 1, author: 'Humayun', title: 'learn angular', done: true},
            {sn: 1, author: 'Mehedi Hasan', title: 'learn angular', done: true},
            {sn: 2, author: 'Ahmed', title: 'build an angular app', done: false}
        ];

        this.addToLib = function (books, params) {
            if (this.libArra[params-1]) {
                this.libArra[params-1] = books;
            } else {
                books.sn = this.libArra.length + 1;
                this.libArra.push({sn: books.sn, author: books.author, title: books.title, done: false});
                this.clearForm(books);
            }

            return true;

        };
        this.clearForm = function (books) {
            books.sn = '';
            books.author = '';
            books.title = '';
        };
    }]);
