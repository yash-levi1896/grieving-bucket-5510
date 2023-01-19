function FetchData(){
fetch("./fiction.json")
.then((response)=>{
    
    response.json()
    
})
.then((data)=>{
    console.log(data)
});
}
FetchData();