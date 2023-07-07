import { useState,useEffect,router } from "../lib";
import axios from "axios"
const add=function(){
    const [data, setData] = useState([])
    useEffect(function(){
        axios.get(`http://localhost:3000/products`).then(function(abc){
            setData(abc.data)
        })
    },[])
const addsp=function(){
    const name = document.querySelector("#name").value
    const price = document.querySelector("#price").value
    const description = document.querySelector("#description").value
    const categories = document.querySelector("#categories").value
    axios.post('http://localhost:3000/products',{
        ...data,
        name,
        price,
        description,
        categories
   
    }).then(function(){
             router.navigate("/")
    }).then(function(){
        alert("đã thêm xong")
    })  
}
useEffect(function(){
    document.querySelector("#form-add").onsubmit=function(e){
        e.preventDefault()
        addsp()
    }
})

return/*html*/`
<form id="form-add">
<div class="form-group">
    <label >name</label>
    <input type="text" class="form-control" id="name" required>
</div>
<div class="form-group">
    <label >price</label>
    <input type="text" class="form-control" id="price" required>
</div>
<div class="form-group">
    <label >description</label>
    <input type="text" class="form-control" id="description" required>
</div>
<div class="form-group">
    <label >categories</label>
    <input type="text" class="form-control" id="categories" required>
</div>
<div class="form-check">
 
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>
`
}
export default add

