import {HackerNewsHttpService} from "./HackerNewsHttpService";
import type {Story} from "../models/Story";

export class StoryService {
    static async getLatestStories(limit: number = 10): Promise<Story[]> {
        const storyIdsHttpResponse: number[] = await HackerNewsHttpService.get('topstories.json')

        const storyPromises: Promise<Story>[] = []

        let index = 0;
        for (const storyId of storyIdsHttpResponse) {
            storyPromises.push(HackerNewsHttpService.get(`item/${storyId}.json`))

            if (index === limit -1 && limit !== -1) {
                break;
            }
            index++
        }

        return await Promise.all(storyPromises)
    }
}
