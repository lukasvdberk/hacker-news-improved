<script>
    import StoriesList from "./components/stories/StoriesListComponent.svelte";
    import StoryIframe from "./components/StoryIframe.svelte";
</script>

<style>
    span {
        margin-bottom: 10px;
        padding: 0;
        display: block;
    }

    div.half {
        display: inline-block;
        width: 49%;
        margin: 0;
        padding: 0;
        height: 100vh;
    }
</style>
<main>
    <h1>Hacker news improved</h1>
    <span>All the posts from HackerNews.</span>
    <div class="half">
        <StoriesList />
    </div>
    <div class="half">
        <StoryIframe />
    </div>
</main>
