<script>
    export let text = "default text";
</script>

<div class="bubble">
    <p>{text}</p>
</div>

<style>
    .bubble {
        background-color: #6E777B;
        border-radius: 5px 5px 5px 5px;
        padding-left: 5px;
        padding-right: 5px;
    }

    p {
        font-size: 0.65rem;
    }
</style>