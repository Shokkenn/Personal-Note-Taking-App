A full-stack note-taking application that allows users to create, manage, and search personal notes with customizable colors.

Backend (Node.js + Express + MongoDB)
Endpoints

POST /api/notes – Create a note (title, content, color)

GET /api/notes – Get all notes (sorted by newest first)

PUT /api/notes/:id – Update a note

DELETE /api/notes/:id – Delete a note

Note Model

title: String (required, max 100 chars)

content: String (required)

color: String (optional)

timestamps: { createdAt, updatedAt }

Additional Features

Input validation

Error handling