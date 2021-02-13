<script lang="ts">
    import {StoryService} from "../../services/StoryService";
    import {onMount} from "svelte";
    import Story from "./StoryComponent.svelte";
    import {selectedStory} from "../../stores/StoryStore";

    let stories = []
    onMount(async () => {
        stories = await StoryService.getLatestStories(2)
    })

    function setNewSelectedStory(event) {
        selectedStory.update(() => event.detail)
    }
</script>

<style>
    div {
        margin-bottom: 10px;
        box-shadow: 0 0 2px 4px lightgrey;
    }
</style>
{#each stories as story, index}
    <div>
        <Story
            on:click={setNewSelectedStory}
            index={index + 1}
            story={story}
        />
    </div>
{/each}
