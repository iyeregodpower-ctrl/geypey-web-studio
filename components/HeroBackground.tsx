"use client";

import { useEffect, useRef } from "react";

const VERT = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

mat2 rot(float a) {
  float c = cos(a), s = sin(a);
  return mat2(c, -s, s, c);
}

float sdSphere(vec3 p, float r) {
  return length(p) - r;
}

float sdTorus(vec3 p, vec2 t) {
  vec2 q = vec2(length(p.xz) - t.x, p.y);
  return length(q) - t.y;
}

float mapScene(vec3 p) {
  vec3 q = p;
  q.xy += u_mouse * 0.18;
  float orb = sdSphere(q, 0.72);

  vec3 r1 = q;
  r1.yz *= rot(0.55);
  r1.xz *= rot(u_time * 0.22);
  float ring1 = sdTorus(r1, vec2(1.05, 0.018));

  vec3 r2 = q;
  r2.xy *= rot(-0.7);
  r2.yz *= rot(u_time * 0.16 + 1.2);
  float ring2 = sdTorus(r2, vec2(1.28, 0.012));

  vec3 r3 = q;
  r3.xz *= rot(1.1);
  r3.xy *= rot(u_time * 0.11);
  float ring3 = sdTorus(r3, vec2(0.88, 0.008));

  return min(orb, min(ring1, min(ring2, ring3)));
}

vec3 calcNormal(vec3 p) {
  vec2 e = vec2(0.0018, 0.0);
  return normalize(vec3(
    mapScene(p + e.xyy) - mapScene(p - e.xyy),
    mapScene(p + e.yxy) - mapScene(p - e.yxy),
    mapScene(p + e.yyx) - mapScene(p - e.yyx)
  ));
}

vec3 iridescence(float fresnel, float angle) {
  vec3 violet = vec3(0.62, 0.42, 1.0);
  vec3 cyan = vec3(0.28, 0.82, 1.0);
  vec3 gold = vec3(0.95, 0.78, 0.42);
  vec3 rose = vec3(0.95, 0.45, 0.72);
  vec3 tone = mix(violet, cyan, 0.5 + 0.5 * sin(angle * 3.0));
  tone = mix(tone, gold, smoothstep(0.35, 0.9, fresnel));
  tone = mix(tone, rose, 0.25 + 0.25 * sin(angle * 1.7 + 1.4));
  return tone;
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_res) / min(u_res.y, u_res.x);
  vec2 st = gl_FragCoord.xy / u_res;

  vec3 ro = vec3(0.0, 0.0, 2.55);
  vec3 rd = normalize(vec3(uv, -1.35));

  float t = 0.0;
  float hit = 0.0;
  vec3 p = ro;
  for (int i = 0; i < 56; i++) {
    p = ro + rd * t;
    float d = mapScene(p);
    if (d < 0.0015) {
      hit = 1.0;
      break;
    }
    t += d;
    if (t > 8.0) break;
  }

  vec3 col = vec3(0.004, 0.004, 0.008);

  float stars = 0.0;
  vec2 grid = floor(st * vec2(90.0, 52.0));
  float n = hash(grid);
  if (n > 0.985) {
    vec2 gv = fract(st * vec2(90.0, 52.0)) - 0.5;
    float twinkle = 0.55 + 0.45 * sin(u_time * (2.0 + n * 4.0) + n * 30.0);
    stars = twinkle * smoothstep(0.18, 0.0, length(gv));
  }
  col += vec3(0.72, 0.78, 1.0) * stars * 0.55;

  float fogGlow = exp(-length(uv * vec2(1.1, 1.25)) * 1.15);
  col += vec3(0.12, 0.08, 0.22) * fogGlow * 0.45;

  if (hit > 0.5) {
    vec3 nrm = calcNormal(p);
    vec3 light = normalize(vec3(-0.4 + u_mouse.x, 0.7, 0.85));
    float diff = max(dot(nrm, light), 0.0);
    float fres = pow(1.0 - max(dot(nrm, -rd), 0.0), 3.2);
    float spec = pow(max(dot(reflect(-light, nrm), -rd), 0.0), 48.0);
    vec3 irr = iridescence(fres, nrm.y + nrm.x + u_time * 0.15);

    vec3 orbCol = irr * (0.18 + diff * 0.55);
    orbCol += irr * fres * 0.95;
    orbCol += vec3(1.0, 0.96, 0.9) * spec * 0.85;
    orbCol += vec3(0.08, 0.05, 0.12);

    float rings = smoothstep(0.78, 1.05, length(p.xy));
    orbCol += vec3(0.9, 0.82, 0.62) * rings * 0.22;

    col = mix(col, orbCol, 0.92);
  } else {
    float rim = exp(-pow(length(uv * vec2(0.92, 1.05)) - 0.55, 2.0) * 18.0);
    col += iridescence(0.7, u_time * 0.2) * rim * 0.12;
  }

  float vignette = smoothstep(1.25, 0.28, length((st - 0.5) * vec2(1.35, 1.1)));
  col *= vignette;
  col = pow(max(col, 0.0), vec3(0.92));

  gl_FragColor = vec4(col, 1.0);
}
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      premultipliedAlpha: true,
      powerPreference: "high-performance",
    });

    if (!gl) return;

    const vs = createShader(gl, gl.VERTEX_SHADER, VERT);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, FRAG);
    const program = gl.createProgram();
    if (!vs || !fs || !program) return;

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);

    const aPos = gl.getAttribLocation(program, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, "u_res");
    const uTime = gl.getUniformLocation(program, "u_time");
    const uMouse = gl.getUniformLocation(program, "u_mouse");

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    let raf = 0;
    let running = true;
    let start = performance.now();

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const dprCap = isMobile ? 1.1 : 1.5;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, dprCap);
      const { clientWidth, clientHeight } = canvas;
      const w = Math.max(1, Math.floor(clientWidth * dpr));
      const h = Math.max(1, Math.floor(clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };

    const onPointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.tx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.ty = (0.5 - (event.clientY - rect.top) / rect.height) * 2;
    };

    const drawFrame = (now: number) => {
      resize();
      mouse.x += (mouse.tx - mouse.x) * 0.045;
      mouse.y += (mouse.ty - mouse.y) * 0.045;
      const t = reduceMotion ? 0.8 : (now - start) / 1000;
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, t);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    const loop = (now: number) => {
      if (!running) return;
      drawFrame(now);
      if (!reduceMotion) raf = requestAnimationFrame(loop);
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!reduceMotion) {
        running = true;
        start = performance.now() - 800;
        raf = requestAnimationFrame(loop);
      } else {
        drawFrame(performance.now());
      }
    };

    resize();
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(loop);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buffer);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(88,40,160,0.28)_0%,_transparent_55%)]" />
      <div className="absolute left-1/2 top-[42%] z-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_180deg,_#7c5cff,_#4de2ff,_#f0c27a,_#ff6b9d,_#7c5cff)] opacity-30 blur-3xl" />
      <canvas ref={canvasRef} className="absolute inset-0 z-[1] block h-full w-full" aria-hidden="true" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/25 via-transparent to-black" />
    </div>
  );
}
