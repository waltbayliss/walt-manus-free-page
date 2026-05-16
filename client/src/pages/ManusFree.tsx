/**
 * /manus-free — WaltBayliss.com Manus Giveaway Page
 *
 * Design philosophy: Deep-navy hero (matching waltbayliss.com's #0f2460 → #1e3a8a gradient),
 * white/teal/warm-orange accent palette, Playfair Display display headings,
 * Dancing Script for the tagline, Inter for body. Glassmorphism benefit cards,
 * prominent download CTA, and a clean referral section with QR code.
 */

import { useEffect } from "react";

const GUIDE_PDF =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663370007106/uMnORhbGTOTbtPOb.pdf";
const REFERRAL_URL = "https://waltbayliss.com/manus";
const QR_IMG = "/manus-referral-qr.png";
const WALT_HEADSHOT = "https://waltbayliss.com/manus-storage/walt-headshot_927b9aba.png";

const BENEFITS = [
  {
    icon: "🔍",
    title: "Wide Research — at Scale",
    body: "Manus can scan hundreds of sources in parallel and synthesise a full research report in minutes. What used to take a team a week now takes one prompt.",
  },
  {
    icon: "🌐",
    title: "Build & Deploy Websites",
    body: "Describe what you want and Manus builds a working, deployable website or full-stack app — no developer required. Seriously.",
  },
  {
    icon: "📊",
    title: "Data → Dashboards & Slides",
    body: "Drop in raw data and Manus turns it into polished reports, charts, and presentation-ready slide decks automatically.",
  },
  {
    icon: "🔗",
    title: "Connect Your Business Tools",
    body: "MCP connectors let Manus plug directly into Notion, Google Drive, Gmail, Slack, and hundreds of other tools — no code needed.",
  },
  {
    icon: "🤖",
    title: "Browser Automation",
    body: "Manus can log in, navigate, fill forms, and complete multi-step browser tasks on your behalf — like having a tireless digital assistant.",
  },
  {
    icon: "⏰",
    title: "Scheduled & Recurring Tasks",
    body: "Set Manus to run tasks on a schedule — daily reports, weekly summaries, automated workflows — all without you lifting a finger.",
  },
  {
    icon: "⚡",
    title: "Zapier & Slack Triggers",
    body: "Trigger Manus from your existing automation stack. A Zapier event or Slack message can kick off a full AI workflow instantly.",
  },
  {
    icon: "🎬",
    title: "Multimedia Processing",
    body: "Images, audio, video, PDFs — Manus reads, analyses, and transforms them all. Transcribe a meeting, extract data from a PDF, or generate visuals.",
  },
  {
    icon: "🛠️",
    title: "Build Custom AI Tools",
    body: "Advanced users can create custom MCP servers and internal AI-powered tools — turning Manus into a bespoke AI platform for your business.",
  },
  {
    icon: "🧠",
    title: "Copy-Paste Prompts That Work",
    body: "The guide includes real, tested prompts for each use case — so you can get results from day one, not after weeks of trial and error.",
  },
];

export default function ManusFree() {
  useEffect(() => {
    document.title = "Free Manus Guide — 10 Things You Didn't Know | Walt Bayliss";
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "linear-gradient(160deg, #0a1a4e 0%, #0f2460 40%, #1a3a7a 100%)",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      {/* ── Google Fonts ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700&family=Dancing+Script:wght@600;700&family=Inter:wght@300;400;500;600;700;800&display=swap');

        .wb-nav-link { color: rgba(255,255,255,0.75); text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.2s; }
        .wb-nav-link:hover { color: #fff; }

        .wb-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2);
          border-radius: 999px; padding: 6px 16px; font-size: 13px; font-weight: 600;
          letter-spacing: 0.05em; text-transform: uppercase; color: #7dd3fc;
          margin-bottom: 24px;
        }

        .wb-display { font-family: 'Playfair Display', serif; }
        .wb-script  { font-family: 'Dancing Script', cursive; }

        .wb-cta-primary {
          display: inline-flex; align-items: center; gap: 10px;
          background: linear-gradient(135deg, #f97316, #fb923c);
          color: #fff; font-weight: 700; font-size: 18px;
          padding: 18px 40px; border-radius: 12px;
          text-decoration: none; transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 8px 32px rgba(249,115,22,0.4);
        }
        .wb-cta-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(249,115,22,0.55); }

        .wb-cta-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.25);
          color: #fff; font-weight: 600; font-size: 15px;
          padding: 14px 28px; border-radius: 10px;
          text-decoration: none; transition: background 0.2s;
        }
        .wb-cta-secondary:hover { background: rgba(255,255,255,0.18); }

        .wb-benefit-card {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 16px; padding: 28px 24px;
          transition: transform 0.2s, background 0.2s;
        }
        .wb-benefit-card:hover { transform: translateY(-4px); background: rgba(255,255,255,0.11); }

        .wb-section-label {
          font-size: 11px; font-weight: 700; letter-spacing: 0.15em;
          text-transform: uppercase; color: #7dd3fc; margin-bottom: 12px;
        }

        .wb-divider {
          width: 60px; height: 3px;
          background: linear-gradient(90deg, #38bdf8, #f97316);
          border-radius: 2px; margin: 20px auto;
        }

        .wb-qr-card {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 24px; padding: 40px 36px;
          text-align: center; max-width: 480px; margin: 0 auto;
        }

        .wb-referral-link {
          display: inline-block;
          background: rgba(56,189,248,0.15);
          border: 1px solid rgba(56,189,248,0.4);
          color: #7dd3fc; font-weight: 600; font-size: 16px;
          padding: 12px 24px; border-radius: 10px;
          text-decoration: none; word-break: break-all;
          transition: background 0.2s;
        }
        .wb-referral-link:hover { background: rgba(56,189,248,0.25); }

        .wb-stat { text-align: center; }
        .wb-stat-num { font-family: 'Playfair Display', serif; font-size: 36px; font-weight: 800; color: #fff; }
        .wb-stat-label { font-size: 13px; color: rgba(255,255,255,0.6); margin-top: 4px; }

        .wb-checklist li {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 15px; color: rgba(255,255,255,0.85); margin-bottom: 10px;
        }
        .wb-checklist li::before {
          content: "✓"; color: #34d399; font-weight: 700; flex-shrink: 0; margin-top: 1px;
        }

        @media (max-width: 640px) {
          .wb-hero-grid { flex-direction: column !important; }
          .wb-benefits-grid { grid-template-columns: 1fr !important; }
          .wb-stats-row { flex-direction: column !important; gap: 24px !important; }
        }
      `}</style>

      {/* ── Navigation ── */}
      <nav
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "16px 0",
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(10,26,78,0.85)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a
            href="https://waltbayliss.com"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 20,
              fontWeight: 800,
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Walt Bayliss
          </a>
          <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
            <a href="https://waltbayliss.com" className="wb-nav-link">Home</a>
            <a href="https://waltbayliss.com/newsletter" className="wb-nav-link">Newsletter</a>
            <a href="https://waltbayliss.com/blog" className="wb-nav-link">Blog</a>
            <a
              href={GUIDE_PDF}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "linear-gradient(135deg, #f97316, #fb923c)",
                color: "#fff",
                fontWeight: 700,
                fontSize: 13,
                padding: "8px 18px",
                borderRadius: 8,
                textDecoration: "none",
              }}
            >
              Get the Guide ↓
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ padding: "80px 24px 60px", maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="wb-hero-grid"
          style={{ display: "flex", gap: 60, alignItems: "center" }}
        >
          {/* Left copy */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="wb-hero-badge">
              <span>🎁</span> Free Download — Instant Access
            </div>

            <p
              className="wb-script"
              style={{ fontSize: 24, color: "#7dd3fc", marginBottom: 8 }}
            >
              You Have Magic In You.
            </p>

            <h1
              className="wb-display"
              style={{ fontSize: "clamp(36px, 5vw, 58px)", lineHeight: 1.15, marginBottom: 20 }}
            >
              10 Things You Didn't Know
              <br />
              <span style={{ color: "#38bdf8" }}>You Could Do With Manus</span>
            </h1>

            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.8)",
                maxWidth: 540,
                marginBottom: 32,
              }}
            >
              The AI agent that works while you sleep. This free guide reveals 10 powerful
              use cases most people never discover — from wide research to full website
              builds, browser automation, and beyond.
            </p>

            <ul className="wb-checklist" style={{ listStyle: "none", padding: 0, marginBottom: 36 }}>
              <li>No coding required — works for any entrepreneur</li>
              <li>10 copy-paste prompts included for instant results</li>
              <li>Built from official Manus docs + real-world testing</li>
              <li>Completely free — Walt's gift to the community</li>
            </ul>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a
                href={GUIDE_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="wb-cta-primary"
              >
                <span>⬇</span> Download the Free Guide
              </a>
              <a
                href={REFERRAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="wb-cta-secondary"
              >
                Try Manus Free →
              </a>
            </div>

            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginTop: 16 }}>
              🔒 No email required. Click and download instantly.
            </p>
          </div>

          {/* Right — Walt headshot + guide preview card */}
          <div
            style={{
              flexShrink: 0,
              width: 340,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 24,
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 24,
                padding: 24,
                textAlign: "center",
                width: "100%",
              }}
            >
              <img
                src={WALT_HEADSHOT}
                alt="Walt Bayliss"
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid #38bdf8",
                  marginBottom: 16,
                }}
              />
              <p
                className="wb-display"
                style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}
              >
                Walt Bayliss
              </p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 16 }}>
                Entrepreneur · AI Builder · Serial Founder
              </p>

              <div
                style={{
                  background: "linear-gradient(135deg, #0f2460, #1e3a8a)",
                  border: "1px solid rgba(56,189,248,0.3)",
                  borderRadius: 16,
                  padding: "20px 16px",
                }}
              >
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#7dd3fc", marginBottom: 8 }}>
                  FREE GUIDE
                </p>
                <p
                  className="wb-display"
                  style={{ fontSize: 16, fontWeight: 800, lineHeight: 1.3, marginBottom: 12 }}
                >
                  10 Things You Didn't Know You Could Do With Manus
                </p>
                <a
                  href={GUIDE_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    background: "linear-gradient(135deg, #f97316, #fb923c)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 14,
                    padding: "12px 16px",
                    borderRadius: 10,
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  ⬇ Download Free PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "32px 24px",
        }}
      >
        <div
          className="wb-stats-row"
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-around",
            gap: 32,
          }}
        >
          {[
            { num: "10", label: "Powerful Use Cases" },
            { num: "10", label: "Copy-Paste Prompts" },
            { num: "5K+", label: "Newsletter Subscribers" },
            { num: "20+", label: "Years Entrepreneurship" },
          ].map((s) => (
            <div key={s.label} className="wb-stat">
              <div className="wb-stat-num">{s.num}</div>
              <div className="wb-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── What is Manus ── */}
      <section style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <p className="wb-section-label">— What is Manus? —</p>
          <h2
            className="wb-display"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", marginBottom: 16 }}
          >
            The AI Agent That Actually Does the Work
          </h2>
          <div className="wb-divider" />
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.8)",
              maxWidth: 700,
              margin: "0 auto 40px",
            }}
          >
            Manus isn't just a chatbot. It's a fully autonomous AI agent that can browse the
            web, write and run code, manage files, connect to your tools, and complete
            multi-step tasks — all on its own. Think of it as hiring a brilliant digital
            employee who never sleeps, never complains, and gets smarter every week.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 20,
              textAlign: "left",
            }}
          >
            {[
              { icon: "🧠", title: "Autonomous", desc: "Completes full tasks without hand-holding — you set the goal, Manus figures out the steps." },
              { icon: "🌐", title: "Connected", desc: "Plugs into your existing tools via MCP — Notion, Gmail, Drive, Slack, and more." },
              { icon: "⚡", title: "Fast", desc: "Parallel processing means Manus can do in minutes what would take a human hours or days." },
              { icon: "🔒", title: "Secure", desc: "Your data stays in your workspace. Manus operates in an isolated sandbox environment." },
            ].map((item) => (
              <div key={item.title} className="wb-benefit-card">
                <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
                <h3
                  className="wb-display"
                  style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10 Benefits ── */}
      <section
        style={{
          padding: "80px 24px",
          background: "rgba(0,0,0,0.2)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p className="wb-section-label">— Inside the Guide —</p>
            <h2
              className="wb-display"
              style={{ fontSize: "clamp(28px, 4vw, 44px)", marginBottom: 12 }}
            >
              10 Use Cases That Will Change How You Work
            </h2>
            <div className="wb-divider" />
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", maxWidth: 560, margin: "0 auto" }}>
              Each use case comes with a real explanation and a copy-paste prompt so you
              can start getting results today.
            </p>
          </div>

          <div
            className="wb-benefits-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {BENEFITS.map((b, i) => (
              <div key={b.title} className="wb-benefit-card">
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <span
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "rgba(56,189,248,0.15)",
                      border: "1px solid rgba(56,189,248,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                      flexShrink: 0,
                    }}
                  >
                    {b.icon}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#7dd3fc",
                      letterSpacing: "0.1em",
                    }}
                  >
                    #{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  className="wb-display"
                  style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}
                >
                  {b.title}
                </h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.65 }}>
                  {b.body}
                </p>
              </div>
            ))}
          </div>

          {/* Mid-page CTA */}
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <a
              href={GUIDE_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="wb-cta-primary"
            >
              <span>⬇</span> Download the Full Guide — Free
            </a>
          </div>
        </div>
      </section>

      {/* ── Referral / QR Section ── */}
      <section style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="wb-section-label">— Ready to Try Manus? —</p>
          <h2
            className="wb-display"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", marginBottom: 12 }}
          >
            Get Started with Manus — Walt's Referral Link
          </h2>
          <div className="wb-divider" />
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            Use Walt's referral link to sign up for Manus. You'll get access to the same
            platform Walt uses every day to run his businesses, create content, and
            build toward $1M/year in family income.
          </p>
        </div>

        <div className="wb-qr-card">
          <p
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#7dd3fc",
              marginBottom: 24,
            }}
          >
            Scan to Sign Up for Manus
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: 12,
              display: "inline-block",
              marginBottom: 28,
              boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
            }}
          >
            <img
              src={QR_IMG}
              alt="QR code — scan to sign up for Manus via Walt's referral link"
              style={{ width: 200, height: 200, display: "block" }}
            />
          </div>

          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginBottom: 16 }}>
            Or click the link below:
          </p>

          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="wb-referral-link"
          >
            waltbayliss.com/manus
          </a>

          <div style={{ marginTop: 28 }}>
            <a
              href={REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="wb-cta-primary"
              style={{ fontSize: 16, padding: "14px 32px" }}
            >
              Try Manus Free →
            </a>
          </div>

          <p
            style={{
              fontSize: 12,
              color: "rgba(255,255,255,0.4)",
              marginTop: 20,
              lineHeight: 1.6,
            }}
          >
            Walt uses Manus daily across his businesses. Signing up via this link
            supports his work and his mission to help entrepreneurs build real freedom with AI.
          </p>
        </div>
      </section>

      {/* ── About Walt ── */}
      <section
        style={{
          padding: "80px 24px",
          background: "rgba(0,0,0,0.2)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            display: "flex",
            gap: 48,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <img
            src={WALT_HEADSHOT}
            alt="Walt Bayliss"
            style={{
              width: 160,
              height: 160,
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #38bdf8",
              flexShrink: 0,
            }}
          />
          <div style={{ flex: 1, minWidth: 260 }}>
            <p className="wb-section-label">— About Walt —</p>
            <h2
              className="wb-display"
              style={{ fontSize: 32, fontWeight: 800, marginBottom: 16 }}
            >
              Serial Founder. AI Builder. Freedom Chaser.
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.8)",
                marginBottom: 20,
              }}
            >
              I've been building businesses online for over 20 years. Right now I'm building
              toward <strong style={{ color: "#fff" }}>$1,000,000 a year</strong> in family
              income — and I'm doing it in public, every Thursday in my newsletter.
            </p>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.8)",
                marginBottom: 28,
              }}
            >
              I believe AI is the greatest leverage tool entrepreneurs have ever had. This
              guide is my way of sharing what I've learned — so you can start using Manus
              the right way, from day one.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="https://waltbayliss.com/newsletter"
                style={{
                  background: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 14,
                  padding: "12px 24px",
                  borderRadius: 10,
                  textDecoration: "none",
                }}
              >
                Join the Newsletter →
              </a>
              <a
                href="https://waltbayliss.com/about"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 14,
                  padding: "12px 24px",
                  borderRadius: 10,
                  textDecoration: "none",
                }}
              >
                Read Walt's Story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section
        style={{
          padding: "80px 24px",
          textAlign: "center",
          background: "linear-gradient(135deg, #0f2460 0%, #1e3a8a 100%)",
          borderTop: "1px solid rgba(56,189,248,0.2)",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <p className="wb-script" style={{ fontSize: 22, color: "#7dd3fc", marginBottom: 8 }}>
            You Have Magic In You.
          </p>
          <h2
            className="wb-display"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", marginBottom: 16 }}
          >
            Start Your AI Freedom Journey Today
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.75)",
              marginBottom: 40,
              lineHeight: 1.7,
            }}
          >
            Download the free guide, sign up for Manus, and join 5,000+ entrepreneurs
            getting the weekly AI briefing that documents the real journey to $1M/year.
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href={GUIDE_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="wb-cta-primary"
            >
              <span>⬇</span> Download the Free Guide
            </a>
            <a
              href={REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="wb-cta-secondary"
            >
              Try Manus Free →
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        style={{
          padding: "32px 24px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          textAlign: "center",
        }}
      >
        <p
          className="wb-display"
          style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}
        >
          Walt Bayliss
        </p>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 16 }}>
          You Have Magic In You.
        </p>
        <div style={{ display: "flex", gap: 24, justifyContent: "center", marginBottom: 20 }}>
          {[
            { label: "Home", href: "https://waltbayliss.com" },
            { label: "Newsletter", href: "https://waltbayliss.com/newsletter" },
            { label: "Blog", href: "https://waltbayliss.com/blog" },
            { label: "About", href: "https://waltbayliss.com/about" },
            { label: "Privacy", href: "https://waltbayliss.com/privacy" },
          ].map((l) => (
            <a key={l.label} href={l.href} className="wb-nav-link">
              {l.label}
            </a>
          ))}
        </div>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
          © {new Date().getFullYear()} Walt Bayliss · WaltBayliss.com · All rights reserved.
        </p>
      </footer>
    </div>
  );
}
