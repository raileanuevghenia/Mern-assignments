
const Author = require('../models/author.model');


module.exports.createAuthor = (request, response) => {
    const { name } = request.body;
    Author.create({
        name
    })
        .then(author => response.json(author))
        .catch(err => response.json(err));
}

module.exports.getAllAuthors = (request, response) => {
    // Get all authors, sorted by name in alphabetical order
    Author.find({}).sort({name: 'asc'})
        .then(authors => response.json(authors))
        .catch(err => response.json(err));
}

module.exports.getAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err => response.status(404).json(err));
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators: true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => {
            response.json(err)
        }); 
}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteAuthor => response.json(deleteAuthor))
        .catch(err => response.json(err))
}