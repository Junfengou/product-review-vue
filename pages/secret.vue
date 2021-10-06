<template>
    <div>
        <h1>This is secret info</h1>
    </div>
</template>



<script>
/* Server side rendering will get rid of the weird flick that life cycle methods will create with authenticated related rendering issues */

import * as firebase from 'firebase/app'
import 'firebase/auth'
import { getUserFromCookie, getUserFromSession } from '@/helpers'
    export default {
        // built in func inside Nuxt that will check to see if anything is available on server
        // on refresh, it will always check the server first, then route
        asyncData(context) {
            if(process.server) {
                const user = getUserFromCookie();
                console.log(user);
                if(!user) {
                    context.redirect('/login')
                }

            } else {
                let user = firebase.auth().currentUser;
                if(!user) {
                    context.redirect('/login')
                }
            }
            
        }
    }
</script>

<style lang="scss" scoped>

</style>