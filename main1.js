const numberAndOperator = document.querySelectorAll("span[data-key]");
console.log(numberAndOperator)
let userElement = ''
let color = ["red","blue","black","orange","green","grey","yellow","pink"]
let counter = 1
Array.prototype.forEach.call(numberAndOperator,function(item) {
    item.addEventListener("click",function(){
        if(counter<=7){
            item.style.backgroundColor = color[counter]
            counter +=1
        }
        else {
            counter = 0
        }
        let item_value = item.getAttribute("data-key")
        console.log(item_value)
        userElement += item_value;
        console.log(userElement)
        input_screen.textContent = userElement
        console.log(typeof item_value)
        returnResult()
    })
})

const equal = document.querySelector(".equals-to")
equal.addEventListener("click",function(){
    returnResult()

})

const input_screen = document.querySelector(".input")
const result_screen = document.querySelector(".result")

const delete_button = document.querySelector(".delete")
delete_button.addEventListener("click",function(){
    result_screen.textContent = ""
   userElement = userElement.slice(0,-1)
    input_screen.textContent = userElement
    returnResult() 

})

function returnResult() {
    if (!Number.isNaN(parseInt(userElement[userElement.length-1]))) {
        const result = eval(userElement)
        result_screen.textContent = result
        }
}