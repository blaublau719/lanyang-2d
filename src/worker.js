export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/visitors") {
      const current =
        (await env.VISITOR_COUNT.get("visit")) || "0";
      const count = (parseInt(current) + 1).toString();
      await env.VISITOR_COUNT.put("visit", count);
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
};
