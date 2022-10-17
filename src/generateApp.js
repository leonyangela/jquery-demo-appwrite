import { Client, Account, ID, Databases } from 'appwrite'

export class GenerateApp {

    constructor() {
        this.client = new Client()
            .setEndpoint(process.env.API_ENDPOINT)       // Your API Endpoint
            .setProject(process.env.PROJECT_ID)          // Your project ID
        this.account = new Account(this.client)
        this.databases = new Databases(this.client)

        let data = sessionStorage.getItem("appWriteUser")

        // if local storage is empty, show form or register data
        if (!data) {
            this.register()
            // if local storage is not empty, show to do list
        } else {
            this.todoFunc()
        }

    }

    generateTodo() {
        var htmlAdd = ''

        htmlAdd += '<h1 class=" h5 pt-2">add your todos below...</h1>'
        htmlAdd += '<div class="input-group mb-3 pt-2">'
        htmlAdd += '    <input type="text" class="form-control" id="todoinput" placeholder="add todos..." aria-label="todo lists aria-describedby="button-addon2">'
        htmlAdd += '    <button class="btn btn-outline-secondary" type="button" id="btnAdd">Add Item</button>'
        htmlAdd += '</div>'

        htmlAdd += '<div class="w-100" id="card-group">'
        htmlAdd += '    <div class="card w-50" id="no-data">'
        htmlAdd += '        <div class="card-body">'
        htmlAdd += '            <h5 class="card-title">No data....</h5>'
        htmlAdd += '        </div>'
        htmlAdd += '    </div>'
        htmlAdd += '</div>'
        htmlAdd += '<button type="button" class="btn btn-primary mt-5" id="btnLogout">Logout</button> '

        $('.container-fluid').html(htmlAdd)
    }

    generateLoginForm() {
        var htmlAdd = ''
        htmlAdd += '<div class="row justify-content-center align-items-center h-100">'
        htmlAdd += '    <div class="col-12 col-lg-9 col-xl-7">'
        htmlAdd += '        <div class="card shadow-2-strong card-login" style="border-radius: 15px">'
        htmlAdd += '            <div class="card-body p-4 p-md-5">'
        htmlAdd += '                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Login Form</h3>'
        htmlAdd += '                <form id="registrationForm">'
        htmlAdd += '                    <div class="row">'
        htmlAdd += '                        <div class="col-md-6 mb-4">'
        htmlAdd += '                            <div class="form-outline">'
        htmlAdd += '                                <input type="email" id="login_email" class="form-control form-control-lg" />'
        htmlAdd += '                                <label class="form-label" for="email">Email</label>'
        htmlAdd += '                            </div>'
        htmlAdd += '                        </div>'
        htmlAdd += '                        <div class="col-md-6 mb-4">'
        htmlAdd += '                            <div class="form-outline">'
        htmlAdd += '                                <input type="password" id="login_password" class="form-control form-control-lg" />'
        htmlAdd += '                                <label class="form-label" for="password">Password</label > '
        htmlAdd += '                            </div>'
        htmlAdd += '                        </div>'
        htmlAdd += '                    </div>'
        htmlAdd += '                    <div class="mt-4 pt-2">'
        htmlAdd += '                        <input class="btn btn-primary btn-lg" type="submit" value="Login" id="btnLogin" />'
        htmlAdd += '                        <input class="btn btn-primary btn-lg" type="submit" value="Register" id="goToRegister" />'
        htmlAdd += '                    </div>'
        htmlAdd += '                </form>'
        htmlAdd += '            </div>'
        htmlAdd += '        </div>'
        htmlAdd += '    </div>'
        htmlAdd += '</div>'

        $('.container-fluid').html(htmlAdd)
    }

    generateRegisterForm() {
        var htmlAdd = ''

        htmlAdd += '<div class="row justify-content-center align-items-center h-100">'
        htmlAdd += '    <div class="col-12 col-lg-9 col-xl-7">'
        htmlAdd += '        <div class="card shadow-2-strong card-registration" style="border-radius: 15px">'
        htmlAdd += '            <div class="card-body p-4 p-md-5">'
        htmlAdd += '                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>'
        htmlAdd += '                <form id="registrationForm">'
        htmlAdd += '                    <div class="row">'
        htmlAdd += '                        <div class="col-md-6 mb-4">'
        htmlAdd += '                            <div class="form-outline">'
        htmlAdd += '                                <input type="text" id="name" class="form-control form-control-lg" />'
        htmlAdd += '                                <label class="form-label" for="name">Name</label>'
        htmlAdd += '                            </div>'
        htmlAdd += '                        </div>'
        htmlAdd += '                        <div class="col-md-6 mb-4">'
        htmlAdd += '                            <div class="form-outline">'
        htmlAdd += '                                <input type="email" id="email" class="form-control form-control-lg" />'
        htmlAdd += '                                <label class="form-label" for="email">Email</label>'
        htmlAdd += '                            </div>'
        htmlAdd += '                        </div>'
        htmlAdd += '                    </div>'
        htmlAdd += '                    <div class="row">'
        htmlAdd += '                        <div class="col-md-6 mb-4 pb-2">'
        htmlAdd += '                            <div class="form-outline">'
        htmlAdd += '                                <input type="password" id="password" class="form-control form-control-lg" />'
        htmlAdd += '                                <label class="form-label" for="password">Password</label>'
        htmlAdd += '                            </div>'
        htmlAdd += '                        </div>'
        htmlAdd += '                    </div>'
        htmlAdd += '                    <div class="mt-4 pt-2">'
        htmlAdd += '                        <input class="btn btn-primary btn-lg" type="submit" value="Register" id="btnRegister" />'
        htmlAdd += '                        <input class="btn btn-primary btn-lg" type="submit" value="Login" id="goToLogin" />'
        htmlAdd += '                    </div>'
        htmlAdd += '                </form>'
        htmlAdd += '            </div>'
        htmlAdd += '        </div>'
        htmlAdd += '    </div>'
        htmlAdd += '</div>'

        $('.container-fluid').html(htmlAdd)

    }

    addCard(element) {
        var htmlAdd = ''

        htmlAdd += '<div class="card w-50 rounded-2 mt-3">'
        htmlAdd += '    <div class="card-body">'
        htmlAdd += '        <h5 class="card-title">' + element.todos_name + '</h5>'
        htmlAdd += '    </div>'
        htmlAdd += '</div>'

        return htmlAdd
    }

    changePage() {
        $("#goToLogin").on('click', (e) => {
            this.login()
        })

        $("#goToRegister").on('click', (e) => {
            this.register()
        })
    }

    register() {

        // Register User
        let registerObj = {
            userId: ID.unique(),
            email: '',
            password: '',
            name: ''
        }

        this.generateRegisterForm()

        $('#email').on('input', function (el) {
            registerObj.email = el.target.value
        })

        $('#password').on('input', function (el) {
            registerObj.password = el.target.value
        })

        $('#name').on('input', function (el) {
            registerObj.name = el.target.value
        })

        $("#btnRegister").on('click', (e) => {
            e.preventDefault()

            if (registerObj.email != '' && registerObj.password != '' && registerObj.name != '') {
                const promise = this.account.create(registerObj.userId, registerObj.email, registerObj.password, registerObj.name)

                promise.then((response) => {
                    this.login()
                }, function (error) {
                    console.log(error) // Failure
                })

            } else {
                console.log('registerObj is emptyy!')
            }
        })

        this.changePage()
    }

    login() {

        let loginObj = {
            email: '',
            password: ''
        }

        console.log(loginObj.email, loginObj.password)

        this.generateLoginForm()

        $('#login_email').on('input', function (el) {
            loginObj.email = el.target.value
        })

        $('#login_password').on('input', function (el) {
            loginObj.password = el.target.value
        })

        $("#btnLogin").on('click', (e) => {
            e.preventDefault()

            if (loginObj.email != '' && loginObj.password != '') {

                const promise = this.account.createEmailSession(loginObj.email, loginObj.password)

                promise.then((response) => {
                    // save data to local storage
                    sessionStorage.setItem("appWriteUser", JSON.stringify(response))
                    this.todoFunc()
                }, function (error) {
                    console.log(error) // Failure
                })
            } else {
                console.log('loginObj is emptyy!')
            }

        })

        this.changePage()
    }

    todoFunc() {
        let todos_name = ''

        this.generateTodo()

        // if user click log out btn, clear local storage
        $("#btnLogout").on('click', (e) => {
            sessionStorage.removeItem("appWriteUser")
            this.login()
        })

        $('#todoinput').on('input', function (el) {
            todos_name = el.target.value
        })

        $("#btnAdd").on('click', (e) => {
            const promise = this.databases.createDocument(
                process.env.DB_ID,
                process.env.DB_COLLECTION_ID,
                ID.unique(),
                {
                    todos_name: todos_name
                }
            )

            promise.then((response) => {
                $('#no-data').remove()
                $('#card-group').append(this.addCard(response))
            }, function (error) {
                console.log(error) // Failure
            })
        })
    }
}