import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, Minimize2, ExternalLink, X, ChevronDown } from "lucide-react";

/* ── Types ── */
export interface FigJamPage {
  name: string;
  nodeId: string;
}

interface FigJamViewerProps {
  className?: string;
  fileKey: string;
  fileName: string;
  pages: FigJamPage[];
  accentColor?: string;
  accentColorLight?: string;
  accentBgAlpha?: string;
}

/* ── Default Embody configuration (backward compat) ── */
const EMBODY_FILE_KEY = "Vfg6IMAMjtQoiZEDECwic2";
const EMBODY_FILE_NAME = "Planning---Concepting---Research";
const EMBODY_PAGES: FigJamPage[] = [
  { name: "Starting Point",        nodeId: "654-1711" },
  { name: "Consequences",          nodeId: "327-1115" },
  { name: "Hardware",              nodeId: "296-1205" },
  { name: "Research",              nodeId: "296-976" },
  { name: "USP Notes",             nodeId: "423-1170" },
  { name: "Packaging Prototype",   nodeId: "540-1318" },
  { name: "Service Model Canvas",  nodeId: "447-198" },
];

/* ── Shared styles ── */
const btnStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 32,
  height: 32,
  borderRadius: 8,
  border: "none",
  background: "none",
  color: "#999",
  cursor: "pointer",
};

/* ── Component ── */
export function FigJamViewer({
  className = "",
  fileKey = EMBODY_FILE_KEY,
  fileName = EMBODY_FILE_NAME,
  pages = EMBODY_PAGES,
  accentColor = "#a259ff",
  accentColorLight = "#c9a0ff",
  accentBgAlpha = "rgba(162,89,255,0.15)",
}: FigJamViewerProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const page = pages[currentPage];

  const buildEmbedUrl = (nodeId: string) =>
    `https://www.figma.com/embed?embed_host=portfolio&url=https://www.figma.com/board/${fileKey}/${fileName}?node-id=${nodeId}`;

  const buildFigmaUrl = (nodeId: string) =>
    `https://www.figma.com/board/${fileKey}/${fileName}?node-id=${nodeId}`;

  const embedUrl = buildEmbedUrl(page.nodeId);
  const figmaUrl = buildFigmaUrl(page.nodeId);

  const handleLoad = useCallback(() => setIsLoading(false), []);
  const toggleExpand = useCallback(() => setIsExpanded((p) => !p), []);
  const openInFigma = useCallback(
    () => window.open(figmaUrl, "_blank", "noopener,noreferrer"),
    [figmaUrl]
  );

  const switchPage = useCallback((index: number) => {
    if (index === currentPage) {
      setIsDropdownOpen(false);
      return;
    }
    setCurrentPage(index);
    setIsLoading(true);
    setIsDropdownOpen(false);
  }, [currentPage]);

  /* Close dropdown on outside click */
  useEffect(() => {
    if (!isDropdownOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isDropdownOpen]);

  /* Escape to close */
  useEffect(() => {
    if (!isExpanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsDropdownOpen(false);
        setIsExpanded(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isExpanded]);

  /* Lock scroll when expanded */
  useEffect(() => {
    document.body.style.overflow = isExpanded ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isExpanded]);

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            key="fjv-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => { setIsDropdownOpen(false); toggleExpand(); }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              zIndex: 999,
            }}
          />
        )}
      </AnimatePresence>

      {/* Viewer window */}
      <div
        className={className}
        style={
          isExpanded
            ? {
                position: "fixed",
                inset: "20px",
                zIndex: 1000,
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                background: "#1e1e1e",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 12px 48px rgba(0,0,0,0.5)",
              }
            : {
                position: "relative",
                width: "100%",
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                background: "#1e1e1e",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
              }
        }
      >
        {/* ── Title bar ── */}
        <div
          className="flex items-center justify-between"
          style={{
            padding: "10px 16px",
            background: "rgba(44,44,44,0.8)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            flexShrink: 0,
          }}
        >
          <div className="flex items-center gap-3 min-w-0">
            {/* Figma logo */}
            <svg width="16" height="16" viewBox="0 0 38 57" fill="none" className="flex-shrink-0">
              <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
              <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
              <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
              <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
              <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
            </svg>

            {/* Page dropdown */}
            <div ref={dropdownRef} style={{ position: "relative" }}>
              <button
                onClick={() => setIsDropdownOpen((p) => !p)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "4px 10px",
                  background: isDropdownOpen ? "rgba(255,255,255,0.08)" : "none",
                  border: "1px solid transparent",
                  borderRadius: 8,
                  color: "#e0e0e0",
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => { if (!isDropdownOpen) (e.currentTarget.style.background = "rgba(255,255,255,0.05)"); }}
                onMouseLeave={(e) => { if (!isDropdownOpen) (e.currentTarget.style.background = "none"); }}
              >
                <span style={{ maxWidth: 200, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {page.name}
                </span>
                <ChevronDown
                  size={14}
                  style={{
                    transition: "transform 0.2s",
                    transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                    flexShrink: 0,
                  }}
                />
              </button>

              {/* Dropdown menu */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    style={{
                      position: "absolute",
                      top: "calc(100% + 4px)",
                      left: 0,
                      minWidth: 220,
                      background: "#2c2c2c",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 10,
                      boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                      padding: "4px",
                      zIndex: 1001,
                      overflow: "hidden",
                    }}
                  >
                    <div style={{ padding: "6px 10px 4px", fontSize: 11, color: "#666", textTransform: "uppercase", letterSpacing: 1 }}>
                      Pages
                    </div>
                    {pages.map((p, i) => (
                      <button
                        key={p.nodeId}
                        onClick={() => switchPage(i)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          width: "100%",
                          padding: "8px 10px",
                          background: i === currentPage ? accentBgAlpha : "none",
                          border: "none",
                          borderRadius: 6,
                          color: i === currentPage ? accentColorLight : "#ccc",
                          fontSize: 13,
                          cursor: "pointer",
                          textAlign: "left",
                          transition: "background 0.1s",
                        }}
                        onMouseEnter={(e) => {
                          if (i !== currentPage) e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                        }}
                        onMouseLeave={(e) => {
                          if (i !== currentPage) e.currentTarget.style.background = "none";
                        }}
                      >
                        <span style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: i === currentPage ? accentColor : "#555",
                          flexShrink: 0,
                        }} />
                        {p.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "#1ABCFE",
                background: "rgba(26,188,254,0.12)",
                border: "1px solid rgba(26,188,254,0.25)",
                padding: "2px 8px",
                borderRadius: 10,
                whiteSpace: "nowrap",
              }}
            >
              FigJam
            </span>
          </div>

          <div className="flex items-center gap-1">
            {/* Page counter */}
            <span style={{ fontSize: 12, color: "#666", marginRight: 4 }}>
              {currentPage + 1}/{pages.length}
            </span>
            <button onClick={openInFigma} title="Open in Figma" aria-label="Open in Figma" style={btnStyle}>
              <ExternalLink size={16} />
            </button>
            <button
              onClick={toggleExpand}
              title={isExpanded ? "Exit fullscreen" : "Fullscreen"}
              aria-label={isExpanded ? "Exit fullscreen" : "Fullscreen"}
              style={btnStyle}
            >
              {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </button>
            {isExpanded && (
              <button onClick={toggleExpand} title="Close" aria-label="Close" style={{ ...btnStyle, color: "#ff3b30" }}>
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* ── iframe viewport ── */}
        <div
          style={{
            position: "relative",
            width: "100%",
            flex: isExpanded ? "1 1 auto" : undefined,
            aspectRatio: isExpanded ? undefined : "16 / 10",
            background: "#111",
          }}
        >
          {/* Loading spinner */}
          <AnimatePresence>
            {isLoading && (
              <motion.div
                key="fjv-loader"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  background: "#111",
                  zIndex: 10,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    border: "3px solid #333",
                    borderTopColor: accentColor,
                    borderRadius: "50%",
                    animation: "fjv-spin 0.7s linear infinite",
                  }}
                />
                <p style={{ color: "#888", fontSize: 14, margin: 0 }}>
                  Loading {page.name}&hellip;
                </p>
                <style>{`@keyframes fjv-spin { to { transform: rotate(360deg); } }`}</style>
              </motion.div>
            )}
          </AnimatePresence>

          <iframe
            ref={iframeRef}
            src={embedUrl}
            title={page.name}
            onLoad={handleLoad}
            allowFullScreen
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            style={{ width: "100%", height: "100%", border: "none", display: "block" }}
          />
        </div>

        {/* ── Footer ── */}
        <div
          className="flex items-center justify-between"
          style={{
            padding: "8px 16px",
            background: "rgba(44,44,44,0.8)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: 12, color: "#666" }}>
            Pan, zoom, and explore &mdash; use the dropdown to switch pages
          </span>
          {isExpanded && (
            <span style={{ fontSize: 12, color: "#888", background: "#3a3a3a", padding: "2px 8px", borderRadius: 4 }}>
              Press Esc to exit
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default FigJamViewer;
