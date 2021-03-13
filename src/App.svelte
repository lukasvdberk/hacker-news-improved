<script>
    import StoriesList from "./components/stories/StoriesListComponent.svelte";
</script>

<style>
    main {
        position: relative;
        width: 95%;
        margin: 0 auto;
    }
</style>
<main>
    <h1>Hacker news improved</h1>
    <span>All the recent posts from HackerNews.</span>
    <StoriesList />
</main>
