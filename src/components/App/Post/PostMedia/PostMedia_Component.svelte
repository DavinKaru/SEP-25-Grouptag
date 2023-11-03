<script>
    export let postMedia;

</script>

<img src={postMedia} alt="Post Media" />

<style>
    
        img {
            width: 90%;
            border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */
        }

        /* Tablet + PC Sizing */
        @media (min-width: 768px) {

        img {
            width: 55%;
        }

}
</style>