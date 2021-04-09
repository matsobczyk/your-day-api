exports.getNotes = (async (req, res) => {
    res.json('get all notes')
})

exports.getNote = (async (req, res) => {
    res.json(req.body.noteId)
})
exports.postNote = (async (req, res) => {
    res.json('postnote')
})
exports.patchNote = (async (req, res) => {
    res.json(req.body.noteId)
})
exports.deleteNote = (async (req, res) => {
    res.json(req.body.noteId)
})

