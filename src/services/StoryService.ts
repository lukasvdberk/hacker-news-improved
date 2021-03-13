import {HackerNewsHttpService} from "./HackerNewsHttpService";
import type {Story} from "../models/Story";

export class StoryService {
    static _ALL_STORY_IDS: number[] = []

    static async getLatestStories(limit: number = 10, offset: number = 0): Promise<Story[]> {
        let storyIdsHttpResponse: number[] = await StoryService._getTopStories()

        const storyPromises: Promise<Story>[] = []

        let index = 0;

        storyIdsHttpResponse = storyIdsHttpResponse.slice(offset, storyIdsHttpResponse.length)

        for (const storyId of storyIdsHttpResponse) {
            // store the promise
            storyPromises.push(HackerNewsHttpService.get(`item/${storyId}.json`))

            if (index === limit -1 && limit !== -1) {
                break;
            }
            index++
        }

        // To fetch the stories in parallel and not in synchronous mode
        return await Promise.all(storyPromises)
    }

    private static async _getTopStories(): Promise<number[]> {
        if(StoryService._ALL_STORY_IDS.length === 0) {
            StoryService._ALL_STORY_IDS = await HackerNewsHttpService.get('topstories.json')
        }

        return this._ALL_STORY_IDS
    }
}
