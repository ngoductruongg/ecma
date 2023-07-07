import { render, router } from "../lib"
import './style/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import home from "./admin"
import add from "./add"
import BookUpdate from "./update"
// DOM declaration
var app = document.querySelector('#app')

router.on('/', function() {
    render(home, app)
})
router.on('/add', function() {
    render(add, app)
})
router.on(`/update/:id`,function(data){
    render(()=>BookUpdate(data.id),app)
})

router.resolve()



