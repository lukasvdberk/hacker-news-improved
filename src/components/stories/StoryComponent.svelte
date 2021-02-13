<script lang="ts">
    import type { Story } from "../../models/Story";
    import { createEventDispatcher } from 'svelte';

    export let story: Story;
    export let index: number = 1;

    const dispatch = createEventDispatcher();

    function click() {
        dispatch('click', story);
    }
</script>

<style>
    div.container {
        background-color: #FFEFE5;
        width: 100%;
        border-radius: 2px;
        cursor: pointer;
    }

    div.content {
        display: inline-block;
        padding: 20px;
    }
    span {
        display: block;
    }

    span.index {
        display: inline-block;
        font-size: 2rem;
        padding-left: 20px;
    }
</style>

<div on:click={click} class="container">
    <span class="index">{ index }</span>
    <div class="content">
        <span>{ story.title }</span>
        <span>score: { story.score }</span>
    </div>
</div>
