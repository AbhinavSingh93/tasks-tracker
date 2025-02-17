const fs=require('fs');

let tasks;

if(fs.existsSync('tasks.json')) 
{
  const data=fs.readFileSync('tasks.json','utf8');
  tasks=JSON.parse(data);
}
else{
  console.log("file does not exist..");
  fs.writeFileSync('tasks.json','[]');
  tasks=[];
}

const id=parseInt(process.argv[2]);
const newtitle=process.argv[3];

if(isNaN(id)) 
{
  console.log("please enter valid data");
  process.exit(1);
}

const taskstoupdate=tasks.find(tasks=>tasks.id==id);

if(!taskstoupdate)
{
  console.log('tasks with id not found');
  process.exit(1);
}
taskstoupdate.task=newtitle;
taskstoupdate.updatedAt=new Date().toISOString();

fs.writeFileSync('tasks.json',JSON.stringify(tasks,null,2));

console.log("Updated succesfully...");

