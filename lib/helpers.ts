import { format, differenceInMinutes, differenceInHours, differenceInDays } from 'date-fns';

// Time Helper
export function formatTime(inputTime: Date): string {
  const now = new Date();
  const diffInMinutes = differenceInMinutes(now, inputTime);
  const diffInHours = differenceInHours(now, inputTime);
  const diffInDays = differenceInDays(now, inputTime);

  if (diffInDays < 30) {
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
    } else {
      return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
    }
  } else {
    return format(inputTime, 'MMM dd, yyyy hh:mm a');
  }
}

// Address Helper
type TruncateAddressType = "start" | "end" | "start-to-end";
export function truncateAddress(address: string, type: TruncateAddressType = "start-to-end"): string {
  if (type === "start") {
    return `${address.slice(0, 5)}`;
  } else if (type === "end") {
    return `${address.slice(-4)}`;
  } else {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }
}