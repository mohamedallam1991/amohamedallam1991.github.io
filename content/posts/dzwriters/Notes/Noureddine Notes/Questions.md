
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