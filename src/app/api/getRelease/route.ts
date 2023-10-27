import { GetDownloadUrlDocument } from "@graphql/graphql";
import { client } from "src/client/graphql";

export async function GET() {
    const data = await client.request(GetDownloadUrlDocument);
    return new Response(JSON.stringify(data))
    }