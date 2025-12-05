'use client'
import React, { useRef, useState, useEffect } from "react";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Slider } from "@heroui/slider";

import cover from "../assets/album-cover.png";


type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  width?: number | string;
  height?: number | string;
  strokeWidth?: number;
  fill?: string;
};


const AnySlider = Slider as unknown as any;

export const HeartIcon = ({
  size = 24,
  width,
  height,
  strokeWidth = 1.5,
  fill = "none",
  ...props
}: IconProps) => {
  return (
    <svg
      aria-hidden="true"
      fill={fill}
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export const PauseCircleIcon = ({ size = 24, width, height, ...props }: IconProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M11.9688 2C6.44875 2 1.96875 6.48 1.96875 12C1.96875 17.52 6.44875 22 11.9688 22C17.4888 22 21.9688 17.52 21.9688 12C21.9688 6.48 17.4988 2 11.9688 2ZM10.7188 15.03C10.7188 15.51 10.5188 15.7 10.0087 15.7H8.70875C8.19875 15.7 7.99875 15.51 7.99875 15.03V8.97C7.99875 8.49 8.19875 8.3 8.70875 8.3H9.99875C10.5087 8.3 10.7087 8.49 10.7087 8.97V15.03H10.7188ZM15.9987 15.03C15.9987 15.51 15.7987 15.7 15.2887 15.7H13.9987C13.4887 15.7 13.2887 15.51 13.2887 15.03V8.97C13.2887 8.49 13.4887 8.3 13.9987 8.3H15.2887C15.7987 8.3 15.9987 8.49 15.9987 8.97V15.03Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const PlayCircleIcon = ({ size = 54, width, height, ...props }: IconProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path d="M9.5 8.5L16.5 12L9.5 15.5V8.5Z" fill="white" />
    </svg>
  );
};

export const NextIcon = ({ size = 24, width, height, ...props }: IconProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M3.76172 7.21957V16.7896C3.76172 18.7496 5.89172 19.9796 7.59172 18.9996L11.7417 16.6096L15.8917 14.2096C17.5917 13.2296 17.5917 10.7796 15.8917 9.79957L11.7417 7.39957L7.59172 5.00957C5.89172 4.02957 3.76172 5.24957 3.76172 7.21957Z"
        fill="currentColor"
      />
      <path
        d="M20.2383 18.9303C19.8283 18.9303 19.4883 18.5903 19.4883 18.1803V5.82031C19.4883 5.41031 19.8283 5.07031 20.2383 5.07031C20.6483 5.07031 20.9883 5.41031 20.9883 5.82031V18.1803C20.9883 18.5903 20.6483 18.9303 20.2383 18.9303Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const PreviousIcon = ({ size = 24, width, height, ...props }: IconProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M20.2409 7.21957V16.7896C20.2409 18.7496 18.1109 19.9796 16.4109 18.9996L12.2609 16.6096L8.11094 14.2096C6.41094 13.2296 6.41094 10.7796 8.11094 9.79957L12.2609 7.39957L16.4109 5.00957C18.1109 4.02957 20.2409 5.24957 20.2409 7.21957Z"
        fill="currentColor"
      />
      <path
        d="M3.76172 18.9303C3.35172 18.9303 3.01172 18.5903 3.01172 18.1803V5.82031C3.01172 5.41031 3.35172 5.07031 3.76172 5.07031C4.17172 5.07031 4.51172 5.41031 4.51172 5.82031V18.1803C4.51172 18.5903 4.17172 18.9303 3.76172 18.9303Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const RepeatOneIcon = ({ size = 24, width, height, ...props }: IconProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
 
      <path d="M3.91 17.1814C3.72 17.1814..." fill="currentColor" />
      <path d="M9.9999 21.75C9.8099..." fill="currentColor" />
      <path d="M12.2485 15.4191C11.8385..." fill="currentColor" />
    </svg>
  );
};

export const ShuffleIcon = ({ size = 24, width, height, ...props }: IconProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
    
    </svg>
  );
};

const formatTime = (time: number) => {
  if (!isFinite(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playlist = [
    { title: "Song One", artist: "Artist A", url: "http://localhost:5000/stream/sample.mp3", cover },
    { title: "Song Two", artist: "Artist B", url: "http://localhost:5000/stream/sample.mp3", cover },
   
  ];

  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [liked, setLiked] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeatMode, setRepeatMode] = useState<'off' | 'all' | 'one'>('off');

  const currentSong = playlist[index];

  const goToNext = () => {
    if (shuffle) {
      let newIndex = Math.floor(Math.random() * playlist.length);
      while (newIndex === index && playlist.length > 1) newIndex = Math.floor(Math.random() * playlist.length);
      setIndex(newIndex);
    } else {
      setIndex((i) => (i + 1) % playlist.length);
    }
  };

  const prevSong = () => {
    setIndex((i) => (i - 1 + playlist.length) % playlist.length);
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) audio.pause();
    else audio.play();
    setIsPlaying(!isPlaying);
  };

  const onSeek = (value: number | number[]) => {
    const audio = audioRef.current;
    if (!audio) return;
    const newTime = Array.isArray(value) ? value[0] : value;
    audio.currentTime = newTime;
 
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      if (repeatMode === 'one') {
        audio.currentTime = 0;
        audio.play();
      } else {
        goToNext();
      }
    };

    audio.addEventListener('ended', handleEnded);
    return () => audio.removeEventListener('ended', handleEnded);
  }, [repeatMode, shuffle, index]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setProgress(audio.currentTime);
    const loaded = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", loaded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", loaded);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) audioRef.current.play();
    }
  }, [index]);

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              shadow="md"
              src={currentSong.cover.src}
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90">Daily Mix</h3>
                <p className="text-small text-foreground/80">{playlist.length} Tracks</p>
                <h1 className="text-large font-medium mt-2">{currentSong.title}</h1>
                <p className="text-small text-foreground/60">{currentSong.artist}</p>
              </div>

              <Button
                isIconOnly
                className="text-default-900/60 data-[hover=true]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                <HeartIcon
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "currentColor" : "none"}
                />
              </Button>
            </div>

            <div className="flex flex-col mt-3 gap-1">
              <AnySlider
                aria-label="Music progress"
                classNames={{
                  track: "bg-default-500/30",
                  thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
                }}
                color="foreground"
                size="sm"
                value={progress}
                maxValue={duration || 1}
                onChange={onSeek}
              />
              <div className="flex justify-between">
                <p className="text-small">{formatTime(progress)}</p>
                <p className="text-small text-foreground/50">{formatTime(duration)}</p>
              </div>
            </div>

            <div className="flex w-full items-center justify-center mt-6 gap-4">
              <Button
                isIconOnly
                className="data-[hover=true]:bg-foreground/10"
                radius="full"
                variant="light"
                onPress={() => setRepeatMode(p => p === 'off' ? 'all' : p === 'all' ? 'one' : 'off')}
              >
                {repeatMode === 'one' ? (
                  <RepeatOneIcon className="text-foreground" />
                ) : (
                  <RepeatOneIcon className={repeatMode === 'all' ? "text-foreground" : "text-foreground/80"} />
                )}
              </Button>

              <Button
                isIconOnly
                className="data-[hover=true]:bg-foreground/10"
                radius="full"
                variant="light"
                onPress={prevSong}
              >
                <PreviousIcon />
              </Button>

              <Button
                isIconOnly
                className="w-auto h-auto data-[hover=true]:bg-foreground/10"
                radius="full"
                variant="light"
                onPress={togglePlay}
              >
                {isPlaying ? <PauseCircleIcon size={54} /> : <PlayCircleIcon size={54} />}
              </Button>

              <Button
                isIconOnly
                className="data-[hover=true]:bg-foreground/10"
                radius="full"
                variant="light"
                onPress={goToNext}
              >
                <NextIcon />
              </Button>

              <Button
                isIconOnly
                className="data-[hover=true]:bg-foreground/10"
                radius="full"
                variant="light"
                onPress={() => setShuffle(v => !v)}
              >
                <ShuffleIcon className={shuffle ? "text-foreground" : "text-foreground/80"} />
              </Button>
            </div>
          </div>
        </div>
      </CardBody>

      <audio ref={audioRef}>
        <source src={currentSong.url} type="audio/mp3" />
      </audio>
    </Card>
  );
}
