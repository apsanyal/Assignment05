// Alternative way to define objects:
// let empForm = document.getElementById("empForm")
// let userId = document.getElementById("userId")
// let userName = document.getElementById("userName")
// let ext = document.getElementById("ext")
// let email = document.getElementById("email")
// let department = document.getElementById("department")

let empForm
let userId
let userName
let ext
let email
let department

const $ = (id) => document.getElementById(id)

empForm         =$("empForm")
userId          =$("userId")
userName        =$("userName")
ext             =$("ext")
email           =$("email")
department      =$("department")

empForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("ID: " + userId.value)
    console.log("Name: " + userName.value)
    console.log("Extension: " + ext.value)
    console.log("Email: "+ email.value)
    console.log("Department: "+ department.value)
})