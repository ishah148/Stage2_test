class StoreApi {
    static async getAllCards(page: number, limit?: number | undefined) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit || 10}&_page=${page}`);
        return await res.json()
    }
}

export default StoreApi;