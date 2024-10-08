import axios from 'axios';
import { format, differenceInMinutes, differenceInHours, differenceInDays } from 'date-fns';
import numeral from 'numeral';

// String Helper
export function capitalizeFirstLetter(input: string): string {
  return input.charAt(0).toUpperCase() + input.slice(1);
}
export function capitalizeAllWords(input: string): string {
  return input.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Time Helper
export function formatTime(inputTime: Date): string {
  if(!inputTime) return '';
  
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
  if(!address) return '';
  if (type === "start") {
    return `${address.slice(0, 5)}`;
  } else if (type === "end") {
    return `${address.slice(-4)}`;
  } else {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }
}


// Smart Contract Helper
export function getPartOfFunction(input: string): string[] {
  return input.split('::');
}

// Coin Helper
export function formatValue(value: number, decimals: number = 2): string {
  return numeral(value).format(`0,0.${'0'.repeat(decimals)}`);
}

// Color Helper

export async function getPopularColor(imageUrl: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous'; // To avoid CORS issues
    img.src = imageUrl;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        console.error('Canvas context is not available');
        reject(new Error('Canvas context is not available'));
        return;
      }

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);

      const imageData = ctx.getImageData(0, 0, img.width, img.height);
      const data = imageData.data;

      const colorCount: { [key: string]: number } = {};
      let maxCount = 0;
      let popularColor = '';

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const color = `rgb(${r}, ${g}, ${b})`;

        colorCount[color] = (colorCount[color] || 0) + 1;

        if (colorCount[color] > maxCount) {
          maxCount = colorCount[color];
          popularColor = color;
        }
      }
      resolve(popularColor);
    };
    img.onerror = (error) => reject(error);
  });
}

// Metadata Helper
export async function getMetadata(url: string): Promise<any> {
  try {
    if(url.startsWith('ipfs://')) {
      url = url.replace('ipfs://', 'https://gateway.pinata.cloud/ipfs/');
    }
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}