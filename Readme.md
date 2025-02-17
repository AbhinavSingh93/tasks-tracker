# Task Tracker CLI

Sample solution for the task-tracker challenge from roadmap.sh. URL :: https://roadmap.sh/projects/task-tracker

This is a simple **command-line interface (CLI)** tool to manage tasks. It allows you to add, update, delete, and list tasks. The tasks are stored in a `tasks.json` file, and each task has properties such as `id`, `description`, `status`, `createdAt`, and `updatedAt`.

## Features

- **Add** new tasks
- **Update** existing tasks
- **Delete** tasks
- **List** all tasks or filter by status: `todo`, `done`, `in-progress`
- **Mark tasks** as done or in progress

## Requirements

- **Node.js** (v12 or higher)
- **No external libraries** (uses built-in `fs` module)

## Setup

 Clone the repository:

   ```bash
   git clone https://github.com/AbhinavSingh93/tasks-tracker


The CLI accepts commands with the following formats:

Add a Task
node add.js "Task description"

Update a Task
node update.js <task_id> "New task description"

Delete a Task
node delete.js <task_id>
Mark a Task as Done or In Progress

node marks.js <status> <task_id>

Where <status> can be:
todo (default when adding a new task)
in-progress
done

List Tasks

node list.js

List Tasks by Status
node list.js <status>

Where <status> can be:
todo
in-progress
done

Example
Add a Task:

node add.js "Buy groceries"

List all tasks:
node list.js

Update a Task:
node update.js 1 "Buy groceries and cook dinner"

Mark a Task as Done:
node marks.js done 1

Delete a Task:
node delete.js 1

Data Storage
Tasks are stored in a tasks.json file in the same directory. The file is updated after every action.

Example tasks.json
[
  {
    "id": 1,
    "task": "Buy groceries",
    "status": "todo",
    "createdAt": "2025-02-17T11:37:19.389Z",
    "updatedAt": "2025-02-17T11:37:19.583Z"
  },
  {
    "id": 3,
    "task": "Clean bed",
    "status": "done",
    "createdAt": "2025-02-17T11:37:40.939Z",
    "updatedAt": "2025-02-17T11:41:46.749Z"
  }
]