import {HackerNewsHttpService} from "./HackerNewsHttpService";
import type {Story} from "../models/Story";

export class StoryService {
    static async getLatestStories(limit:number = 10): Promise<Story[]> {
        const storyIdsHttpResponse = await HackerNewsHttpService.get('topstories.json')

        const stories = []
        for (const storyId in storyIdsHttpResponse) {
            const storyHttpResponse = await HackerNewsHttpService.get(`item/${storyId}.json`)
            stories.push(storyHttpResponse as Story)
        }

        return stories
    }
}
