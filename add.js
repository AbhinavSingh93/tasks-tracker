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

const dataentered=process.argv[2];

if(!dataentered)
{
  console.log("Please enter a task title!");
  process.exit(1);
}

const maxId=tasks.length>0?Math.max(...tasks.map(tasks=>tasks.id)):0;
const newid=maxId+1;

const newtask={
    id:newid,
    task:dataentered,
    status:"todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
};

tasks.push(newtask);


fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2)); 
console.log("Task added successfully!");

