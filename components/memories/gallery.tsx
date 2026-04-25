"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Heart, Calendar, MapPin, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface MemoryItem {
  id: number
  type: "photo" | "video"
  src: string
  thumbnail?: string
  title: string
  date: string
  location: string
  category: string
}

const memories: MemoryItem[] = [
  {
    id: 1,
    type: "photo",
    src: "https://res.cloudinary.com/dohwfmj5l/image/upload/v1776702232/photo_1_f30pmm.jpg",
    title: "..",
    date: "..",
    location: "..",
    category: "date"
  },
  {
    id: 2,
    type: "video",
    src: "https://res.cloudinary.com/dohwfmj5l/video/upload/v1776702428/live_mode_e8wrmn.mp4",
    thumbnail: "https://res.cloudinary.com/dohwfmj5l/image/upload/v1776781296/frame_wpq16t.jpg",
    title: "..",
    date: "..",
    location: "..",
    category: "travel"
  },
  {
    id: 3,
    type: "photo",
    src: "https://res.cloudinary.com/dohwfmj5l/image/upload/v1776781302/a29b283e-34cd-4365-9569-2effb7ae73fe_v99pik.jpg",
    title: "...",
    date: "...",
    location: "...",
    category: "travel"
  },
  {
    id: 4,
    type: "photo",
    src: "https://res.cloudinary.com/dohwfmj5l/image/upload/v1776781304/8fbadd64-78fe-4f27-bb9a-5af3f169e8c9_luoh8p.jpg",
    title: "rs primata",
    date: "11 april 2026",
    location: "pasar kemis",
    category: "special"
  },
  {
    id: 5,
    type: "photo",
    src: "https://res.cloudinary.com/dohwfmj5l/image/upload/v1776781301/c8f1dc2d-65e6-4ef6-ba52-da91b53ae1e8_sz5aat.jpg",
    title: "First Date",
    date: "28 maret 2026",
    location: "klop",
    category: "special"
  },
  {
    id: 6,
    type: "photo",
    src: "https://res.cloudinary.com/dohwfmj5l/image/upload/v1776781298/IMG_1912_gwdf6s.jpg",
    title: "...",
    date: "...",
    location: "...",
    category: "special"
  },
  {
    id: 7,
    type: "video",
    src: "https://res.cloudinary.com/dohwfmj5l/video/upload/v1776782755/a0fad3bc-2a11-4244-a0c8-ab6b5015860c_snlsbd.mp4",
    thumbnail: "https://res.cloudinary.com/dohwfmj5l/image/upload/v1776782756/IMG_1790_wdxw4z.jpg",
    title: "rundom",
    date: "...",
    location: "...",
    category: "date"
  },
  {
    id: 8,
    type: "photo",
    src: "https://res.cloudinary.com/dohwfmj5l/image/upload/v1776781307/8ede8c1a-a982-4a9d-9973-03a2b520d354_wdbg8p.jpg",
    title: "....",
    date: "...",
    location: "...",
    category: "travel"
  },
   {
    id: 9,
    type: "photo",
    src: "https://res.cloudinary.com/dohwfmj5l/image/upload/v1776781301/e4b8fdbb-0403-4d9b-9d08-f0ce2dbce978_vkn2cz.jpg",
    title: "bom bom  car",
    date: "5 april 2026",
    location: "lipo karawaci",
    category: "special"
  },
  {
    id: 10,
    type: "photo",
    src: "https://res.cloudinary.com/dohwfmj5l/image/upload/v1776781305/4f0c4e09-44b6-4d0d-aa6f-02a9489e94d5_suya9b.jpg",
    title: "all you can eat",
    date: "5 april 2026",
    location: "jinman  karawaci",
    category: "special"
  },
  
]

const categories = [
  { id: "all", label: "Semua", icon: Sparkles },
  { id: "date", label: "Kencan", icon: Heart },
  { id: "travel", label: "Traveling", icon: MapPin },
  { id: "special", label: "Spesial", icon: Heart },
  { id: "family", label: "Keluarga", icon: Heart },
]

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedMemory, setSelectedMemory] = useState<MemoryItem | null>(null)
  const [likedItems, setLikedItems] = useState<number[]>([1, 5])

  const filteredMemories = selectedCategory === "all" 
    ? memories 
    : memories.filter(m => m.category === selectedCategory)

  const toggleLike = (id: number) => {
    setLikedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 mb-4"
          >
            <Heart className="w-5 h-5 text-primary fill-primary" />
            <Heart className="w-7 h-7 text-accent fill-accent" />
            <Heart className="w-5 h-5 text-primary fill-primary" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Galeri Kita
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kumpulan momen-momen manis yang kita lalui bersama
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                selectedCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-card text-muted-foreground hover:bg-secondary border border-border hover:border-primary/30"
              )}
            >
              <cat.icon className={cn(
                "w-4 h-4",
                selectedCategory === cat.id && "fill-current"
              )} />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredMemories.map((memory, index) => (
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
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-card shadow-lg border-2 border-transparent hover:border-primary/30 transition-all duration-300">
                  <img
                    src={memory.type === "video" ? memory.thumbnail : memory.src}
                    alt={memory.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Video Indicator */}
                  {memory.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border-2 border-primary/30">
                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-primary border-b-[8px] border-b-transparent ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
                      <h3 className="font-serif font-semibold text-lg mb-1 flex items-center gap-2">
                        {memory.title}
                        <Heart className="w-4 h-4 text-accent fill-accent" />
                      </h3>
                      <div className="flex items-center gap-3 text-xs opacity-90">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {memory.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {memory.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Like Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleLike(memory.id)
                    }}
                    className={cn(
                      "absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110",
                      likedItems.includes(memory.id)
                        ? "bg-primary text-primary-foreground"
                        : "bg-card/90 backdrop-blur-sm text-muted-foreground"
                    )}
                  >
                    <Heart
                      className={cn(
                        "w-5 h-5 transition-all",
                        likedItems.includes(memory.id) && "fill-current scale-110"
                      )}
                    />
                  </button>

                  {/* Corner heart decoration */}
                  <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    >
                      <Heart className="w-4 h-4 text-accent fill-accent" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedMemory(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-card rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMemory(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-video">
                {selectedMemory.type === "video" ? (
                  <video
                    src={selectedMemory.src}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={selectedMemory.src}
                    alt={selectedMemory.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="p-6 bg-gradient-to-r from-primary/5 to-accent/5">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2 flex items-center gap-2">
                  {selectedMemory.title}
                  <Heart className="w-5 h-5 text-primary fill-primary" />
                </h3>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    {selectedMemory.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    {selectedMemory.location}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
