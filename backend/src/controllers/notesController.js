export function getAllNotes (req, res)  {
    res.status(200).json({message: "List of notes"})}

    export function createNote (req, res){
    res.status(201).json({message: "New note created"})}
    
    export function updateNote (req, res) {
    res.status(200).json({message: "Note updated successfully"})}

    export function deleteNote (req, res) {
    res.status(200).json({message: "Note deleted successfully"})}