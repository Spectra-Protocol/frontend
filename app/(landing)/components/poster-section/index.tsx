"use client";

import { motion } from 'framer-motion';

export default function PosterSection() {
    return (
        <section className='absolute top-0 left-0 p-6 w-full h-full flex flex-col items-center justify-center z-0'>
            <motion.img
                className='w-full h-full'
                src='./assets/image-poster-tags.svg'
                animate={{ scale: [0, 1.2, 1] }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "loop",
                    type: "spring",
                    stiffness: 100,
                    repeatDelay: 5,
                }}
            />

        </section>
    );
}