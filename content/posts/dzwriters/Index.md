> [!DZ Writer  knowledge database ]
>  DZ Writer  knowledge database is used to store and organize information from discussions on Clubhouse and Telegram in an easily accessible and extensible format. Any member can particiapte by suggesting topics, asking questions, making new related notes.
 [Telegram](https://t.me/+qEQKvn2FtvdlZDRk)|[Clubhouse](https://www.clubhouse.com/club/dz-writers?utm_medium=ch_club&utm_campaign=tK5uSCAUoRD_9Y2-WuleQw-125339)

# People
```dataview 
list from #team/person 
```
# Open Topics
```dataview 
list from #topic/open
```

# Scheduled Topics
```dataview 
list from #topic/scheduled
```

# Open Questions
```dataviewjs
//get all md files in vault 
const files = app.vault.getMarkdownFiles() 
//create an array with the filename and lines that include the desired tag 

let values = []
const arr = files.map(async(file) => { 
const content = await app.vault.cachedRead(file) 
//turn all the content into an array 
let lines = await content.split("\n").filter(line => line.includes("- [?]")&&!line.includes("line.includes")) 

//
//return ["[["+file.name.split(".")[0]+"]]"] 
if(lines.length > 0) {
//console.log(content, file)
values.push(["[["+file.name.split(".")[0]+"]]", lines,moment.utc(file.stat.mtime).format('LL'),file.stat.mtime])
}

})

//console.log(arr)

//resolve the promises and build the table 
Promise.all(arr).then(a => {  
dv.table(["File", "lines","mtime",'utc'], values) })

```

# Readings
## To Read
```dataview 
list from #readings/toread  
```
## Reading
```dataview 
list from #readings/reading  
```

## Read
```dataview 
list from #readings/read  
```

# Manual 
* *[[Manual]]
* *[[DZ Writers Brainstorming]]

