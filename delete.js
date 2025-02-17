const fs=require('fs');

let tasks;
if(fs.existsSync('tasks.json'))
{
  const data=fs.readFileSync('tasks.json','utf8');
  tasks=JSON.parse(data);
}else{
  console.log("file does not exist..");
  fs.writeFileSync('tasks.json','[]');
  tasks=[];
}

let id=parseInt(process.argv[2]);

if(isNaN(id))
{
  console.log('Enter valid index');
  process.exit(1);
}

const updatedTasks=tasks.filter(tasks=>tasks.id!==id);

if(updatedTasks.length==tasks.length)
{
  console.log("No such id exist");
  process.exit(1);
}

fs.writeFileSync('tasks.json', JSON.stringify(updatedTasks, null, 2))


console.log(`Task with ID ${id} deleted successfully!`);
