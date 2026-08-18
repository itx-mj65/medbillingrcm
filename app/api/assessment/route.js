/**
 * POST /api/assessment
 * Receives assessment form submissions from every CtaSection.
 * 
 * Current: logs to console + returns 200 (works for launch).
 * Production upgrade path:
 *   1. Set NOTIFY_EMAIL env var → sends email via Resend/SendGrid
 *   2. Set HUBSPOT_TOKEN env var → creates CRM lead automatically
 *   3. Set DATABASE_URL env var → persists to Postgres/PlanetScale
 * 
 * None of those steps require changing this file's interface —
 * only the env vars need to be set in the Vercel dashboard.
 */

export const runtime = "edge"; // runs at the CDN edge — fastest possible response

export async function POST(request) {
  try {
    const body = await request.json();

    // ── Validate required fields ───────────────────────────────────────
    const required = ["full_name", "work_email", "practice_name"];
    for (const field of required) {
      if (!body[field]?.trim()) {
        return Response.json(
          { ok: false, error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // ── Basic email format check ───────────────────────────────────────
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.work_email);
    if (!emailOk) {
      return Response.json(
        { ok: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    // ── Log submission (always — provides visibility while email is being wired) ──
    console.log("[assessment]", JSON.stringify({
      name:     body.full_name,
      email:    body.work_email,
      practice: body.practice_name,
      specialty: body.specialty   || "not specified",
      concern:  body.revenue_concern || "not specified",
      page:     body.page         || "/",
      ts:       new Date().toISOString(),
    }));

    // ── Send notification email (requires RESEND_API_KEY env var) ─────
    if (process.env.RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type":  "application/json",
        },
        body: JSON.stringify({
          from:    "Medbilling RCM <no-reply@medbillingrcm.com>",
          to:      [process.env.NOTIFY_EMAIL || "info@medbillingrcm.com"],
          subject: `Assessment request — ${body.practice_name}`,
          text: [
            `Name:      ${body.full_name}`,
            `Email:     ${body.work_email}`,
            `Practice:  ${body.practice_name}`,
            `Specialty: ${body.specialty   || "not specified"}`,
            `Concern:   ${body.revenue_concern || "not specified"}`,
            `Page:      ${body.page         || "/"}`,
            `Time:      ${new Date().toISOString()}`,
          ].join("\n"),
        }),
      });
    }

    return Response.json({ ok: true }, { status: 200 });

  } catch (err) {
    console.error("[assessment] error:", err);
    return Response.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
