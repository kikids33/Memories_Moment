"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Heart, Calendar, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

interface MemoryItem {
  id: number
  type: "photo" | "video"
  src: string
  thumbnail?: string
  title: string
  date: string
  location: string
}

const memories: MemoryItem[] = [
  {
    id: 1,
    type: "photo",
    src: "https://res.cloudinary.com/dohwfmj5l/image/upload/v1776702232/photo_1_f30pmm.jpg",
    title: "..",
    date: "..",
    location: "..",
  },
  {
    id: 2,
    type: "video",
    src: "https://res.cloudinary.com/dohwfmj5l/video/upload/v1776702428/live_mode_e8wrmn.mp4",
    thumbnail: "https://res.cloudinary.com/dohwfmj5l/image/upload/v1776781296/frame_wpq16t.jpg",
    title: "..",
    date: "..",
    location: "..",
  },
  {
    id: 3,
    type: "photo",
    src: "https://res.cloudinary.com/dohwfmj5l/image/upload/v1776781302/a29b283e-34cd-4365-9569-2effb7ae73fe_v99pik.jpg",
    title: "...",
    date: "...",
    location: "...",
  },
  {
    id: 4,
    type: "photo",
    src: "https://res.cloudinary.com/dohwfmj5l/image/upload/v1776781304/8fbadd64-78fe-4f27-bb9a-5af3f169e8c9_luoh8p.jpg",
    title: "rs primata",
    date: "11 april 2026",
    location: "pasar kemis",
  },
  {
    id: 5,
    type: "photo",
    src: "https://res.cloudinary.com/dohwfmj5l/image/upload/v1776781301/c8f1dc2d-65e6-4ef6-ba52-da91b53ae1e8_sz5aat.jpg",
    title: "First Date",
    date: "28 maret 2026",
    location: "klop",
  },
]

export function Gallery() {
  const [selectedMemory, setSelectedMemory] = useState<MemoryItem | null>(null)
  const [likedItems, setLikedItems] = useState<number[]>([1, 5])

  const toggleLike = (id: number) => {
    setLikedItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative">

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence>
            {memories.map((memory, index) => (
              <motion.div
                key={memory.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedMemory(memory)}
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src={memory.type === "video" ? memory.thumbnail : memory.src}
                    className="w-full h-full object-cover"
                  />

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleLike(memory.id)
                    }}
                    className={cn(
                      "absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center",
                      likedItems.includes(memory.id)
                        ? "bg-primary text-white"
                        : "bg-white"
                    )}
                  >
                    <Heart
                      className={cn(
                        "w-5 h-5",
                        likedItems.includes(memory.id) && "fill-current"
                      )}
                    />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center"
            onClick={() => setSelectedMemory(null)}
          >
            <motion.div onClick={(e) => e.stopPropagation()}>
              {selectedMemory.type === "video" ? (
                <video src={selectedMemory.src} controls autoPlay />
              ) : (
                <img src={selectedMemory.src} />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}