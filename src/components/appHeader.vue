<script>
export default {
    name: 'appHeader',
    data() {
        return {
            navbarLinks:['LANDING','PAGES','DOCS'],
            partners:['/img/amazon.svg','/img/shopify.svg','/img/spotify.svg','/img/google.svg','/img/lenovo.svg','/img/paypal.svg']
        }
    }
}
</script>

<template>
    <div class="header">
        <div class="container_70">
            <div class="header_up">
                <div class="left">
                    <img src="/img/logo-dark.png" alt="">
                </div>
                <div class="center">
                    <ul>
                        <li>HOME</li>
                        <li v-for="link in navbarLinks">{{ link }} <font-awesome-icon icon="fa-solid fa-chevron-down" size="2xs" /></li>
                    </ul>
                </div>
                <div class="right d-flex">

                    <div><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></div>
                    <div class="toggle_nav"><font-awesome-icon icon="fa-brands fa-stack-overflow" /></div>
                    <div class="toggle_nav"><font-awesome-icon icon="fa-regular fa-user" /></div>
                    <div class="toggle_nav"><font-awesome-icon icon="fa-brands fa-github" /></div>

                </div>
            </div>
            <div class="jumbo">
                <div class="jumbo_left">
                    <div class="dev mb-3">Development</div>
                    <h1 class="mb-3">A Complete <br> Developer Toolset</h1>
                    <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, totam!</p>
                    <div class="mb-3 btn">
                        <div class="get_start">Get Started</div>
                        <div class="Doc">Documentation</div>
                    </div>
                    <br>
                    <div>Current Version v2.6.0</div>

                </div>
                <div class="jumbo_right">
                    <img src="/img/about.png" alt="">
                </div>
            </div>
        </div>

        
    </div>
    <div class="bg-white">
        <div>

            <img src="../../public/img/waves.png" alt="">
        </div>

        <div class="brand">
            <img v-for="partner in partners" :src="partner" alt="">
        </div>

    </div>
</template>


<style ></style>