// ── Cursor ─────────────────────────────────────────────
export function initCursor() {
    // Only show custom cursor on devices with a pointing device (mouse, trackpad)
    if (!window.matchMedia("(pointer: fine)").matches) {
        return;
    }

    const cur = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");
    let mx = 0,
        my = 0,
        rx = 0,
        ry = 0;
    document.addEventListener("mousemove", (e) => {
        mx = e.clientX;
        my = e.clientY;
        cur.style.left = mx + "px";
        cur.style.top = my + "px";
    });
    (function animRing() {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ring.style.left = rx + "px";
        ring.style.top = ry + "px";
        requestAnimationFrame(animRing);
    })();
    document.querySelectorAll("a,button").forEach((el) => {
        el.addEventListener("mouseenter", () => {
            ring.style.width = "58px";
            ring.style.height = "58px";
            ring.style.opacity = ".45";
        });
        el.addEventListener("mouseleave", () => {
            ring.style.width = "32px";
            ring.style.height = "32px";
            ring.style.opacity = "1";
        });
    });
}
