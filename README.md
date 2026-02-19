# Task Manager
A simple, responsive task management application built with React, TypeScript, and Vite.
It allows users to create, edit, delete, and organize tasks with a clean, mobile-friendly interface.

# Features
Add, edit, and delete tasks
Update task status:
Pending
In Progress
Completed
Sectioned task view by status
Live search across task title and description
Local storage persistence
Smooth animations using Framer Motion
Responsive layout for mobile and desktop
Unit tests with Vitest and Testing Library

# Tech Stack
React
TypeScript
Vite
SCSS Modules
Framer Motion
Vitest + Testing Library

# Getting Started
1. Install dependencies
npm install

2. Run the development server
npm run dev

The app will be available at:

http://localhost:5173

# Run Tests
npm run test

# Build for Production
npm run build

# Project Structure
src/
 ├── components/
 │   ├── AddTaskScreen.tsx
 │   ├── EditTaskScreen.tsx
 │   ├── SearchBar.tsx
 │   ├── StatusDropdown.tsx
 │   ├── TaskItem.tsx
 │   └── TaskList.tsx
 ├── styles/
 ├── types/
 ├── utils/
 ├── App.tsx
 └── main.tsx