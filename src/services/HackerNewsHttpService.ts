const baseUrl: string = "https://hacker-news.firebaseio.com/v0/"

export class HackerNewsHttpService {
    static async get(relativeUrl: string) {
        const response = await fetch(baseUrl + relativeUrl)
        return await response.json()
    }
}


