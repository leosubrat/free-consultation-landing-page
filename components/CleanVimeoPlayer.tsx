"use client";

import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

const VIMEO_ORIGIN = "https://player.vimeo.com";

function postVimeoCommand(iframe: HTMLIFrameElement | null, method: "play" | "pause") {
  iframe?.contentWindow?.postMessage({ method }, VIMEO_ORIGIN);
}

export default function CleanVimeoPlayer({
  embedUrl,
  title
}: {
  embedUrl: string;
  title: string;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPause, setShowPause] = useState(false);

  const playVideo = () => {
    postVimeoCommand(iframeRef.current, "play");
    setIsPlaying(true);
    setShowPause(false);
  };

  const pauseVideo = () => {
    postVimeoCommand(iframeRef.current, "pause");
    setIsPlaying(false);
    setShowPause(true);
  };

  return (
    <div
      className="group relative aspect-video w-full overflow-hidden rounded-[18px] border border-slate-200 bg-slate-50 shadow-soft"
      onMouseEnter={() => setShowPause(true)}
      onMouseLeave={() => setShowPause(false)}
      onClick={() => {
        if (isPlaying) {
          setShowPause(true);
        }
      }}
    >
      <iframe
        ref={iframeRef}
        src={embedUrl}
        title={title}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />

      {!isPlaying ? (
        <button
          type="button"
          aria-label="Play video"
          onClick={playVideo}
          className="focus-ring absolute inset-0 flex items-center justify-center bg-white/10 text-violet-brand transition hover:bg-white/20"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-violet-brand shadow-button ring-1 ring-violet-line/70 transition hover:scale-105 sm:h-20 sm:w-20">
            <Play className="ml-1 h-8 w-8 fill-current sm:h-9 sm:w-9" />
          </span>
        </button>
      ) : null}

      {isPlaying && showPause ? (
        <button
          type="button"
          aria-label="Pause video"
          onClick={pauseVideo}
          className="focus-ring absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-violet-brand shadow-button ring-1 ring-violet-line/70 transition hover:scale-105 sm:h-16 sm:w-16"
        >
          <Pause className="h-7 w-7 fill-current" />
        </button>
      ) : null}
    </div>
  );
}
