import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find()
    res.status(200).json(notes)
  } catch (error) {
    console.log("Error in getallNotes controller", error)
    res.status(500).json({ message: "Error fetching notes" })
  }
}

export function createNote(req, res) {
  res.status(201).json({ message: "New note created" });
}

export function updateNote(req, res) {
  res.status(200).json({ message: "Note updated successfully" });
}

export function deleteNote(req, res) {
  res.status(200).json({ message: "Note deleted successfully" });
}
