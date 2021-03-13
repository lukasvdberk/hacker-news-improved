<script lang="ts">
    import {StoryService} from "../../services/StoryService";
    import {onMount} from "svelte";
    import Story from "./StoryComponent.svelte";
    import {slide} from "svelte/transition"
    import LoadingSpinner from "../shared/LoadingSpinner.svelte";

    let isFetching = false;
    let stories: Story[] = []

    const AMOUNT_OF_STORIES_TO_FETCH = 20

    onMount(async () => {
        stories = await StoryService.getLatestStories(AMOUNT_OF_STORIES_TO_FETCH, 0)
    })

    function setNewSelectedStory(event) {
        const urlOfStory = event.detail.url
        window.open(urlOfStory, '_blank');
    }

    function isOnEndOfPage() {
        return (window.innerHeight + window.scrollY) >= document.body.scrollHeight
    }

    async function scroll() {
        if (isOnEndOfPage() && !isFetching) {
            // fetch the latest stories.
            isFetching = true

            const offset = stories.length
            const newStories = await StoryService.getLatestStories(AMOUNT_OF_STORIES_TO_FETCH, offset)
            stories = [...stories, ...newStories]

            isFetching = false
        }
    }
</script>

<svelte:window on:scroll={scroll} />

<style>
    div {
        margin: 0;
        margin-bottom: 10px;
    }
</style>
{#each stories as story, index}
    <div transition:slide={{x: 200, y: -100}}>
        <Story
            on:click={setNewSelectedStory}
            index={index + 1}
            story={story}
        />
    </div>
{/each}
<LoadingSpinner />
