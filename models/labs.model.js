const labs = [
    { id: 1, view: 'questions/lab1', css: '/css/stylequestion.css' },
    { id: 3, view: 'questions/lab3', css: '/css/stylequestion.css' },
    { id: 4, view: 'questions/lab4', css: '/css/stylequestion.css' },
    { id: 5, view: 'questions/lab5', css: '/css/stylequestion.css' },
    { id: 6, view: 'questions/lab6', css: '/css/lab6.css' },
    { id: 10, view: 'questions/lab10', css: '/css/lab6.css' },
    { id: 11, view: 'questions/lab11', css: '/css/lab6.css' },
    { id: 12, view: 'questions/lab12', css: '/css/lab6.css' },
    { id: 13, view: 'questions/lab13', css: '/css/lab6.css' },
    { id: 17, view: 'questions/lab17', css: '/css/lab6.css' },
    { id: 18, view: 'questions/lab18', css: '/css/lab6.css' },
    { id: 19, view: 'questions/lab19', css: '/css/lab6.css' },
    { id: 22, view: 'questions/lab22', css: '/css/lab6.css' },
    { id: 23, view: 'questions/lab23', css: '/css/lab6.css' },
    { id: 24, view: 'questions/lab24', css: '/css/lab6.css' },
    { id: 26, view: 'questions/lab26', css: '/css/lab6.css' },
];

module.exports = class Lab {

    constructor(id, view, css) {
        this.id = id;
        this.view = view;
        this.css = css;
    }

    save() {
        labs.push(this);
    }

    static fetchAll() {
        return labs;
    }

    static findById(id) {
        return labs.find(lab => lab.id == id);
    }
}