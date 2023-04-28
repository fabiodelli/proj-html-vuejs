<script>
export default {
    name: 'appFooter',
    data() {
        return {
            company: ['About', 'Services', 'team', 'Pricing', 'Project', 'Careers', 'Blog', 'Login'],
            usefullLinks: ['Terms of service', 'Privacy Policy', 'Documentation', 'Changelog', 'Components'],
            payments: ['/img/american-ex.png', '/img/discover.png', '/img/master-card.png', '/img/paypal.png', '/img/visa.png']
        }
    }
}
</script>

<template>
    <div class="footer">
        <div class="container_60">
            <div class="columns">
                <div class="col_a">
                    <img class="logo mb-3" src="/img/logo-light.png" alt="">
                    <p>Start working with Landrick that can provide everything you need to generate awerness, drive traffic,
                        connect</p>
                    <div class="social">
                        <div class="platform"><font-awesome-icon icon="fa-brands fa-facebook-f" /></div>
                        <div class="platform"><font-awesome-icon icon="fa-brands fa-instagram" /></div>
                        <div class="platform"><font-awesome-icon icon="fa-brands fa-twitter" /></div>
                        <div class="platform"><font-awesome-icon icon="fa-brands fa-linkedin-in" /></div>
                    </div>
                </div>
                <div class="col_b">
                    <h5>Company</h5>
                    <ul>
                        <li v-for="link in company">
                            <a href="@">
                                <font-awesome-icon icon="fa-solid fa-chevron-right" size="2xs" class="mt-2" /> {{ link }}
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col_b">
                    <h5>Usefull Links</h5>
                    <ul>
                        <li v-for="link in usefullLinks">
                            <a href="@">
                                <font-awesome-icon icon="fa-solid fa-chevron-right" size="2xs" class="mt-2" /> {{ link }}
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col_a">
                    <h5>Newsletter</h5>
                    <p>Sign up and receive the latest tips via email.</p>
                    <div class="mb-3">Write your email <span class="text-danger">*</span> </div>

                    <div class="input-group input_mail mb-3">
                        <span class="input-group-text logo_mail" id="basic-addon1"><font-awesome-icon
                                icon="fa-regular fa-envelope" /></span>
                        <input type="text" class="form-control mail" placeholder="Your email :" aria-label="Username"
                            aria-describedby="basic-addon1">
                    </div>
                    <div class="footer_btn">
                        <strong>Subscribe</strong>
                    </div>
                </div>
            </div>

        </div>

        <hr>

        <div class="container_60 ">
            <div class="footer_bottom">
                <div>
                    <font-awesome-icon icon="fa-regular fa-copyright" /> 2020 Landrick. Deesign with 
                    <font-awesome-icon class="text-danger" icon="fa-solid fa-heart" /> by shreethemes
                </div>
                <div class="payments">
                    <img v-for="pay in payments" :src="pay" alt="">
                </div>
            </div>
        </div>

    </div>
</template>


<style ></style>