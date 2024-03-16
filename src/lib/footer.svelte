<script>
    import { cart } from "../stores/cartStore";
</script>

<footer>
    <div class="footer">
        <div class="footerLeft">
            <h3>Plant Bay</h3>
            <p>1234 Plant Bay Way</p>
            <p>Plant Bay, FL 12345</p>
            <p>123-456-7890</p>
        </div>
        <div class="footerRight">
            <h3>Follow Us</h3>
            <div class="socials">
                <a class="socialIcons" target="_blank" href="https://www.facebook.com/"><img src="/images/facebook.png" alt="facebook" /></a>
                <a class="socialIcons" target="_blank" href="https://www.instagram.com/"><img src="/images/instagram.png" alt="instagram" /></a>
                <a class="socialIcons" target="_blank" href="https://www.twitter.com/"><img src="/images/twitter.png" alt="twitter" /></a>
            </div>
        </div>
        </div>
        <div class="footerBottom">
            <p>&copy; 2021 Plant Bay</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
        </div>
</footer>

<style>
    footer{
        background-color: var(--dark-green);
        color: white;
    }

    .footer {
        display: flex;
        justify-content: space-between;
        padding: 2rem;
        margin-top: 2rem;
    }

    .footerLeft {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .footerRight {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .socials {
        display: flex;
        gap: 1rem;
    }

    .footerBottom {
        display: flex;
        justify-content: space-between;
        padding: 1rem 2rem;
    }
    @media screen and (max-width: 600px) {
        .footer {
            flex-direction: column;
        }
    }
    
    /* Socials */
    a.socialIcons{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        color: white;
    }
</style>