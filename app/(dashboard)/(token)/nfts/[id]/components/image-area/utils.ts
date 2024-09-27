
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
