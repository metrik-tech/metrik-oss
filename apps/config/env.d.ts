// Generated by Wrangler on Tue Apr 30 2024 19:04:52 GMT-0600 (Mountain Daylight Time)
// by running `wrangler types`

interface Env {
	LILY_DB: D1Database;
	RATE_LIMIT: Ratelimit;
	KV: KVNamespace;
}

interface Ratelimit {
	/*
	 * The namespace ID for the ratelimit
	 */
	namespaceId: string;

	/*
	 * The limit value for the ratelimit
	 */
	limitVal: number;

	/*
	 * The period for the ratelimit
	 */
	period: number;

	/*
	 * The ratelimit buckets, contains the amount of requests made per rate limit key.
	 */
	buckets: Map<string, number>;

	/*
	 * The time the user was last let through successfully.
	 */
	epoch: number;

	/*
	 * The ratelimit function
	 * @param {RatelimitOptions} options
	 * @returns {Promise<RatelimitResponse>}
	 */
	limit: (options: RatelimitOptions) => Promise<RatelimitResponse>;
}

interface RatelimitOptions {
	/*
	 * The key to identify the user, can be an IP address, user ID, etc.
	 */
	key: string;
}

interface RatelimitResponse {
	/*
	 * The ratelimit success status
	 * @returns {boolean}
	 */
	success: boolean;
}
