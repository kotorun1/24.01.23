import React from 'react'

export default function Authorition() {
        return <div class="loginBox">
        <h1>Login</h1>
        <form action="" method="post">
            <div>
                <label for="name">Username</label>
                <input type="text" id="name" name="userName"/>
            </div>
            <div>
                <label for="mail">Password</label>
                <input type="password" id="passwd" name="passwd"/>
            </div>
            <div class="button">
                <button>SignUp</button>
            </div>
            <div class="button">
                <button>SignIn</button>
            </div>
        </form>
    </div>
    }

    