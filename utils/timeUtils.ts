export function formatTime(seconds: number): { minutes: string, seconds: string } {
    const formattedTimeMinutes = String(
        Math.floor(seconds / 60)
    ).padStart(2, "0");

    const formattedTimeSeconds = String(
        seconds % 60
    ).padStart(2, "0");

    return { minutes: formattedTimeMinutes, seconds: formattedTimeSeconds };
}