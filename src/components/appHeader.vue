<script>
export default {
    name: 'appHeader',
    data() {


        return {}
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
                        <li>LANDING</li>
                        <li>PAGES</li>
                        <li>DOCS</li>
                    </ul>
                </div>
                <div class="right d-flex">

                    <div><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></div>
                    <div class="toggle_nav"><font-awesome-icon icon="fa-brands fa-stack-overflow" /></div>
                    <div class="toggle_nav"><font-awesome-icon icon="fa-regular fa-user" /></div>
                    <div class="toggle_nav"><font-awesome-icon icon="fa-brands fa-github" /></div>

                </div>
            </div>
            <div class="header_bottom">
                <div class="header_bl">
                    <div class="dev">Development</div>
                    <h1>A Complete Developer Toolset</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, totam!</p>
                    <div>
                        <button class="get_start">Get Started</button>
                        <button class="Doc">Documentation</button>
                    </div>
                    <br>
                    <div>Current Version v2.6.0</div>

                </div>
                <div class="header_br">
                    <img src="/img/about.png" alt="">
                </div>
            </div>
        </div>

        <div class="bg-white">
            <svg width="100%" height="50%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg"
                class="transition duration-300 ease-in-out delay-150">
                <path
                    d="M 0,400 C 0,400 0,200 0,200 C 175.06666666666666,170.26666666666665 350.1333333333333,140.53333333333333 492,128 C 633.8666666666667,115.46666666666667 742.5333333333333,120.13333333333333 895,135 C 1047.4666666666667,149.86666666666667 1243.7333333333333,174.93333333333334 1440,200 C 1440,200 1440,400 1440,400 Z"
                    stroke="none" stroke-width="0" fill="#f8f9fc" fill-opacity="1"
                    class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)">
                </path>
            </svg>
            <div class="brand">
                <img src="/img/amazon.svg" alt="">
                <img src="/img/shopify.svg" alt="">
                <img src="/img/spotify.svg" alt="">
                <img src="/img/google.svg" alt="">
                <img src="/img/lenovo.svg" alt="">
                <img src="/img/paypal.svg" alt="">
            </div>

        </div>

</div></template>


<style ></style>