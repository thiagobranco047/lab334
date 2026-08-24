import { useCallback, useEffect, useRef } from "react";

type UsePresentationNavigationOptions = {
  currentIndex: number;
  totalSlides: number;
  goToSlide: (index: number) => void;
  goNext: () => void;
  goPrevious: () => void;
  enabled?: boolean;
  allowContentScroll?: boolean;
  getScrollContainer?: () => HTMLElement | null;
};

const WHEEL_COOLDOWN_MS = 650;
const SWIPE_THRESHOLD = 56;

function canScrollContainer(
  container: HTMLElement,
  deltaY: number
): boolean {
  const atTop = container.scrollTop <= 0;
  const atBottom =
    container.scrollTop + container.clientHeight >= container.scrollHeight - 2;

  if (deltaY < 0 && !atTop) return true;
  if (deltaY > 0 && !atBottom) return true;
  return false;
}

export function usePresentationNavigation({
  currentIndex,
  totalSlides,
  goToSlide,
  goNext,
  goPrevious,
  enabled = true,
  allowContentScroll = false,
  getScrollContainer,
}: UsePresentationNavigationOptions) {
  const wheelLocked = useRef(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const allowContentScrollRef = useRef(allowContentScroll);
  const getScrollContainerRef = useRef(getScrollContainer);

  allowContentScrollRef.current = allowContentScroll;
  getScrollContainerRef.current = getScrollContainer;

  const canGoNext = currentIndex < totalSlides - 1;
  const canGoPrevious = currentIndex > 0;

  const handleNext = useCallback(() => {
    if (canGoNext) goNext();
  }, [canGoNext, goNext]);

  const handlePrevious = useCallback(() => {
    if (canGoPrevious) goPrevious();
  }, [canGoPrevious, goPrevious]);

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, [contenteditable=true]")) return;

      switch (event.key) {
        case "ArrowRight":
        case "PageDown":
        case " ":
          event.preventDefault();
          handleNext();
          break;
        case "ArrowDown": {
          if (allowContentScrollRef.current) {
            const container = getScrollContainerRef.current?.();
            if (container && canScrollContainer(container, 1)) return;
          }
          event.preventDefault();
          handleNext();
          break;
        }
        case "ArrowLeft":
        case "PageUp":
        case "Backspace":
          event.preventDefault();
          handlePrevious();
          break;
        case "ArrowUp": {
          if (allowContentScrollRef.current) {
            const container = getScrollContainerRef.current?.();
            if (container && canScrollContainer(container, -1)) return;
          }
          event.preventDefault();
          handlePrevious();
          break;
        }
        case "Home":
          event.preventDefault();
          goToSlide(0);
          break;
        case "End":
          event.preventDefault();
          goToSlide(totalSlides - 1);
          break;
        default:
          break;
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 24) return;

      if (allowContentScrollRef.current) {
        const container = getScrollContainerRef.current?.();
        if (container && canScrollContainer(container, event.deltaY)) {
          return;
        }
      }

      if (wheelLocked.current) return;

      event.preventDefault();
      wheelLocked.current = true;

      if (event.deltaY > 0) {
        handleNext();
      } else {
        handlePrevious();
      }

      window.setTimeout(() => {
        wheelLocked.current = false;
      }, WHEEL_COOLDOWN_MS);
    };

    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.changedTouches[0];
      touchStart.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (!touchStart.current) return;

      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - touchStart.current.x;
      const deltaY = touch.clientY - touchStart.current.y;
      touchStart.current = null;

      if (Math.abs(deltaX) < SWIPE_THRESHOLD || Math.abs(deltaX) < Math.abs(deltaY)) {
        return;
      }

      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [enabled, goToSlide, handleNext, handlePrevious, totalSlides]);
}
