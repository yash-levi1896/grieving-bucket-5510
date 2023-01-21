function FetchData(){
fetch("./fiction.json")
.then((response)=>{    
    return response.json()
})
.then((data)=>{
    console.log(data)
});
}
FetchData();