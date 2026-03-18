interface Env {
  VISITOR_COUNT: KVNamespace;
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/visitors") {
      const current =
        (await env.VISITOR_COUNT.get("total_visits", { type: "text" })) || "0";
      const count = (parseInt(current) + 1).toString();
      await env.VISITOR_COUNT.put("total_visits", count);
      return Response.json(
        { count },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Cache-Control": "no-store",
          },
        }
      );
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
