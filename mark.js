const fs=require('fs');

let tasks;

if(fs.existsSync('tasks.json'))
{
  const data=fs.readFileSync('tasks.json','utf8');
  tasks=JSON.parse(data);
}
else{
  console.log("file does not exist");
  fs.writeFileSync('tasks.json','[]');
  tasks=[];
}

let newstatus=process.argv[2];
let id=process.argv[3];

const tasksstatus=tasks.find(tasks=>tasks.id==id);

if(!tasksstatus)
{
  console.log('tasks with id not found');
  process.exit(1);
}

tasksstatus.status=newstatus;
tasksstatus.updatedAt=new Date().toISOString();

fs.writeFileSync('tasks.json',JSON.stringify(tasks,null,2));

console.log("status changed succesfully");