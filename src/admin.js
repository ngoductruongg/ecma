import { router, useEffect, useState } from "../lib"
import axios from "axios"
const home=function(){
const [data, setData] = useState([])
useEffect(function(){
    axios.get(`http://localhost:3000/products`)
    .then(function(abc){
        setData(abc.data)
    })
},[])
useEffect(function(){
    const xoa = document.querySelectorAll(".delete-btn")
    xoa.forEach(function(abc){
        abc.addEventListener("click",function(){
            const id = abc.dataset.id
            deletesp(id)
        })
    })
})
const deletesp =function(id){
    axios.delete(`http://localhost:3000/products/${id}`)
    .then(function(){
        confirm("bạn có muốn xóa ko");
        router.navigate("/")
    })
    
}

return/*html*/`
<table class="border-2">
<thead class="border-2">
<a href="/add">Tao moi </a>
<tr>
<th class="border-2">stt</th>
<th class="border-2">name</th>
<th class="border-2">gia</th>
<th class="border-2">description</th>
<th class="border-2">categories</th>
<th class="border-2">hành động</th>
</tr>
</thead>
<tbody class="border-2">
${data.map(function(data,index){
    return/*html*/`
    
<tr class="border-2">
<td class="border-2">${index+1}</td>
<td class="border-2"><a href="/admin/${data.id}"> ${data.name}</a>  </td>
<td class="border-2">${data.price}</td>
<td class="border-2">${data.description}</td>
<td>
    ${data.categories}
</td>
<td>
<button data-id=${data.id} onclick="thongbao()"  class="bg-red-200 delete-btn">xoa</button>
<a href="update/${data.id}"  class="bg-red-200 delete-btn">sua</a>
</td>
    </tr>
    `
}).join('')}
</tbody>
</table>
`

}
export default home