const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
    app.post('/api/new', AuthorController.createAuthor);
    app.get('/api/', AuthorController.getAllAuthors);
    app.get('/api/:id', AuthorController.getAuthor);
    app.put('/api/edit/:id', AuthorController.updateAuthor);
    app.delete('/api/delete/:id', AuthorController.deleteAuthor);
}