<script>
import { ribbonCorner } from '../../node_modules/ribbon-corner'
ribbonCorner(options)
export default {
    name: 'appMain',
    props: { keyFeatures: Array, plans: Array, buildTools: Array },
    data() {
        return {

        }
    }
}
</script>

<template>
    <!-- -------------------------------------------------------------------- -->
    <div class="key_features ">
        <div class="container_60">
            <h3 class="mb-4 mt-5">Key features</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo error quos, consequatur veniam culpa reiciendis
                adipisci consequuntur sed tempore sint quas illum deleniti. Labore, ex perferendis officia incidunt suscipit
                laborum.</p>

            <div class="features">
                <div v-for="feature in keyFeatures" class="featur">
                    <div class="feat_img mb-4"> <font-awesome-icon :icon="feature.featureImg" size="lg" /> </div>
                    <h5>{{ feature.feature }}</h5>
                    <p class="mb-2 mt-3">{{ feature.p }}</p>
                    <div class="read_more">
                        <strong> Read more </strong>
                        <font-awesome-icon icon="fa-solid fa-chevron-right" size="2xs" class="mt-1" />
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- ---------------------------------------------------------------------------- -->

    <div class="quickstart">
        <div class="container_60 text-center">
            <h6 class="mb-2">Quickstart</h6>
            <h3 class="mb-4">Awesome isn't it? Let's dive in!</h3>
            <p class="mb-5">Lorem ipsum dolor sit amet <span class="blue">consectetur</span> adipisicing elit. Quaerat dicta
                placeat, ad
                <br>
                doloribus aspernatur tempore.
            </p>
            <div class="img mb-4">
                <div class="nav_img">
                    <div class="nav_container mb-4">
                        <div class="select w_25">npm</div>
                        <div class="w_25">nutget</div>
                        <div class="w_25">spm</div>
                        <div class="w_25">github</div>
                    </div>
                    <div class="command">
                        <span class="text-white me-1"><span class="green">$ </span>npm install </span>
                        <span class="text-white"><span class="green">-g </span>claps.js</span>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <!-- ----------------------------------------------------------------------------- -->
    <div class="build_tools">
        <div class="container_60 d-flex">
            <div class="left">
                <h3 class="mb-4">Build tools and <br> extensive documenatation</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime necessitatibus aspernatur cum eos
                    sapiente ut magnam. Laudantium voluptate inventore nostrum?</p>
                <div v-for="point in buildTools">
                    <font-awesome-icon class="blue" icon="fa-regular fa-circle-check" />
                    {{ point }}
                </div>


                <button class="mt-3"><strong>Read More </strong><font-awesome-icon icon="fa-solid fa-arrow-right" />
                </button>
            </div>
            <div class="right">
                <img src="/img/1.png" alt="">
            </div>
        </div>
    </div>
    <!-- -------------------------------------------------------------------------------------- -->
    <div class="our_rates">
        <div class="container_60 text-center">
            <h3>Our rates for developer from landrick team</h3>
            <p class="mt-5 mb-5">Start working with <span class="blue">Landrick</span> that can provide everything you need
                to generate
                <br> awereness,drive traffic,connect
            </p>
            <div class="plans">
                <div class="plan" v-for="plan in plans">
                    <div class="type mb-2 pe-4 ps-4">{{ plan.type }}</div>
                    <strong class="price"><font-awesome-icon icon="fa-solid fa-dollar-sign" size="sm" />{{ plan.price
                    }}</strong>
                    <div class="mt-1 mb-3">Per Month</div>
                    <p>{{ plan.p }}</p>
                    <hr>
                    <ul>
                        <li v-for="feature in plans[0].features">
                            <font-awesome-icon class="blue" icon="fa-regular fa-circle-check" />
                            {{ feature }}
                        </li>

                    </ul>
                    <button class="mt-2"><strong>Buy Now</strong> </button>
                    <p class="mt-4">*No Credit card required</p>
                    
                </div>
            </div>

        </div>
    </div>
    <!-- -------------------------------------------------------------------------------------- -->
    <div class="want_to">
        <div class="container_60 text-center">
            <h3>Want be among the firdt to fimd out?</h3>
            <p>Start working <span class="blue">Landrick</span> that can provide everything you need to generate
                <br>awerness, drive traffic, connect
            </p>
            <div class="input_mail">
                <input class="ps-4" type="email" name="" id="" placeholder="Email Adress">
                <button><strong>Get started</strong></button>
            </div>
        </div>
    </div>
</template>


<style ></style>