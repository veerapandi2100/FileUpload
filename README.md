# 📁 File Upload Service (Node.js + Express)

This is a simple file upload service built with **Node.js** and **Express**. It supports uploading, listing, and downloading files with validation and basic security.

## 🚀 Features

- Upload `.jpg`, `.png`, `.gif`, `.pdf`, or `.txt` files
- Limit size to 5MB for images and PDFs (no limit for `.txt`)
- List all uploaded files
- Download uploaded files
- Prevents path traversal attacks
- Uses Express middleware for clean structure

## 📂 File Structure

project-root/
├── config/ # Multer config for file upload
├── controllers/ # Upload and file handling logic
├── middleware/ # Error and file size validation
├── routes/ # API routes
├── public/ # Uploaded files stored here
├── index.js # Entry point


## 🛠 Tech Stack

- Node.js
- Express
- Multer (for file upload)
- CORS

## 📦 Installation

```bash
git clone https://github.com/your-username/file-upload-service.git
cd file-upload-service
npm install
