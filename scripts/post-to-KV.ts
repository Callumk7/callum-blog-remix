import { Post } from "@/types";

const KV_URL = "https://api.cloudflare.com/client/v4/accounts/62efe0f8a2c4a70e3a5ece5a27fa574e/storage/kv/namespaces/bd465514f9d042eda9ada688905c4fbc/bulk"
const KV_TOKEN = "60rOtzJKAPhRPLZyy2pR2Pahz-LbRPyc67IV0nOu"

const writeToKV = async (posts: Post[], fileName: string) => {
	// We are going to use the post slug as the title, and the entire data object as the value
	const kvArray = posts.map((post) => {
		return {
			key: post.slug,
			value: JSON.stringify(post),
		}
	})

	// Write the array to kv
	await fetch(KV_URL, {
		method: "PUT",
		headers: {
			Authorization: `Bearer ${KV_TOKEN}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(kvArray),
	})
}
