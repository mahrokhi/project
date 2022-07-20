const body=document.querySelector("body");
const tbody = document.querySelector("tbody");
fetch("https://jsonplaceholder.typicode.com/users").then(function(result){
    console.log(result);
    return result.json()
}).then(function(users){
    console.log(users);
    
    users.map(function(value,index){
        const tr = document.createElement("tr");
        tbody.append(tr); 
        tr.setAttribute("id","index_"+index)
        let td = document.createElement("td");
        tr.append(td);
        td.innerText = users[index].id;
    
        td = document.createElement("td");
        tr.append(td);
        td.innerText = users[index].name;

        td = document.createElement("td");
        tr.append(td);
        td.innerText = users[index].username;

        td = document.createElement("td");
        tr.append(td);
        td.innerText = users[index].email;
    })
});