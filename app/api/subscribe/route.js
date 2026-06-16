import fs from "fs";
import path from "path";

const dataFile = path.join(process.cwd(), "subscribers.json");

function readSubscribers() {
  try {
    const data = fs.readFileSync(dataFile, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function writeSubscribers(list) {
  fs.writeFileSync(dataFile, JSON.stringify(list, null, 2), "utf-8");
}

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return Response.json({ error: "Email is required" }, { status: 400 });
    }

    const subscribers = readSubscribers();

    if (subscribers.includes(email)) {
      return Response.json({ success: true, note: "already subscribed" });
    }

    subscribers.push(email);
    writeSubscribers(subscribers);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error saving subscriber:", error);
    return Response.json({ error: "Failed to save" }, { status: 500 });
  }
}
