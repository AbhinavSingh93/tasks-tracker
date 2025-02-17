const fs=require('fs');

let tasks;
if(fs.existsSync('tasks.json'))
{
  const data=fs.readFileSync('tasks.json','utf8');
  tasks=JSON.parse(data);
}
else{
  console.log("NO file exist");
  fs.writeFileSync('tasks.json','[]');
  tasks=[];
}

let options=process.argv[2];

if(!options) console.log(tasks);
else
{
  options.trim().toLowerCase();
  
  const updatedTasks=tasks.filter(tasks=>tasks.status.trim().toLowerCase()==options);

  console.log(updatedTasks);
}
