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
        box-shadow: 0 1px 1px 0 rgba(0,0,0,0.07),0 3px 1px -2px rgba(0,0,0,0.6),0 1px 5px 0 rgba(0,0,0,0.2);
        background-color: #FFEFE5;
        width: 100%;
        border-radius: 2px;
        cursor: pointer;
    }

    div.content {
        display: inline-block;
        padding: 10px;
    }
    div.content > span {
        display: block;
        overflow-x: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
    }

    span.index {
        display: inline-block;
        vertical-align: top;
        padding-top: 20px;
        padding-left: 10px;
        height: 100%;
    }
</style>

{#if story}
    <div on:click={click} class="container">
        <span class="index">
            <b>{ index }</b>
        </span>
        <div class="content">
            <span>{ story.title }</span>
            <span>score: { story.score }</span>
        </div>
    </div>
{/if}
