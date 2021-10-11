<template>
    <div class="signup">
        <h3>Sign up</h3>
        <form @submit.prevent="pressed">
            <div class="signup">
                <input type="text" placeholder="signup" v-model="email"/>
            </div>
            <div class="password">
                <input type="password" placeholder="password" v-model="password" />
            </div>
            <button>Signup</button>
        </form>
        <div class="error" v-if="error">{{error.message}}</div>
    </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
    export default {
        data() {
            return {
                email: '',
                password: '',
                error: ''
            }
        },
        methods: {
            pressed() {
                firebase.auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
            }
        }
    }
</script>

<style lang="scss" scoped>
    .signup {
        margin-top: 50px;
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    div {
        color: inherit
    }
    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    input {
        width: 400px;
        padding: 30px;
        margin: 20px;
        font-size: 21px;
    }
    button {
        width: 400px;
        height: 75px;
        font-size: 100%;
    }

    .error {
        color: red;
    }
</style>