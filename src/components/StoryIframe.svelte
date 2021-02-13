<script lang="ts">
    import {selectedStory} from "../stores/StoryStore";
    import type {Story} from "../models/Story";

    let story: Story = undefined
    selectedStory.subscribe((newStory) => {
        story = newStory
    })
</script>

<style>
    iframe {
        display: inline-block;
        height: 100vh;
        width: 100%;
    }
</style>

{#if story === undefined}
    <p>First select a story to read then it will be loaded here</p>
{:else}
    <iframe src={ story.url } title={story.title} frameborder="0" scrolling="no"></iframe>
{/if}
