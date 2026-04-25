"use client"

import { motion } from "framer-motion"
import { Heart, Play, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              y: "100vh",
              x: `${Math.random() * 100}vw`,
              rotate: Math.random() * 360
            }}
            animate={{ 
              opacity: [0, 0.6, 0],
              y: "-100vh",
              rotate: Math.random() * 360 + 180
            }}
            transition={{ 
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute"
          >
            <Heart 
              className="text-primary/30 fill-primary/20" 
              style={{ 
                width: 16 + Math.random() * 24,
                height: 16 + Math.random() * 24
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-5 py-2.5 rounded-full border border-primary/30 mb-6 shadow-lg shadow-primary/10"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Cerita Kita</span>
              <Heart className="w-4 h-4 text-accent fill-accent" />
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight mb-6 text-balance">
              Kenangan <br />
              <span className="text-primary relative">
                Kita
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -top-2 -right-6"
                >
                  <Heart className="w-8 h-8 text-accent fill-accent" />
                </motion.span>
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              kumpulan foto foto kitaa , untuk mengenang masa masa indah kita bersama , yang akan selalu kita kenang selamanya
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 group">
                <Heart className="w-4 h-4 mr-2 group-hover:scale-125 transition-transform" />
                Mulai Cerita Kita
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 border-primary/30 hover:bg-primary/10 hover:border-primary/50">
                <Play className="w-4 h-4 mr-2" />
                Lihat Kenangan
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-8 mt-10 justify-center lg:justify-start"
            >
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">1+</p>
                <p className="text-xs text-muted-foreground">Foto Bersama</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">1</p>
                <p className="text-xs text-muted-foreground">Video Kenangan</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">1</p>
                <p className="text-xs text-muted-foreground">Tahun Bersama</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Collage with Hearts */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Heart Frame Main */}
              <motion.div
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-80 z-20"
              >
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-card bg-card p-2">
                  <img
                    src="https://res.cloudinary.com/dohwfmj5l/image/upload/v1776702232/photo_1_f30pmm.jpg"
                    alt="Romantic couple"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="absolute -top-3 -right-3 bg-accent p-2 rounded-full shadow-lg"
                  >
                    <Heart className="w-5 h-5 text-card fill-card" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Side Image 1 */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: -12 }}
                className="absolute top-5 left-0 w-36 h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-card z-10 rotate-[-8deg] bg-card p-1.5"
              >
                <img
                  src="https://res.cloudinary.com/dohwfmj5l/image/upload/v1776781298/8fe19076-01ae-4999-80f2-272482ba089f_xizdlt.jpg"
                  alt="Couple moment"
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>

              {/* Side Image 2 */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 12 }}
                className="absolute bottom-5 right-0 w-40 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-card z-10 rotate-[6deg] bg-card p-1.5"
              >
                <img
                  src="https://res.cloudinary.com/dohwfmj5l/image/upload/v1776781298/IMG_1914_gd3sji.jpg"
                  alt="Sunset together"
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>

              {/* Polaroid with Heart */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 15 }}
                className="absolute top-0 right-5 w-32 h-40 bg-card rounded-xl shadow-lg p-2 rotate-[12deg] z-30 border border-border"
              >
                <img
                  src="https://res.cloudinary.com/dohwfmj5l/image/upload/v1776781294/IMG_1788_q0syje.jpg"
                  alt="Happy memories"
                  className="w-full h-28 object-cover rounded-lg"
                />
                <div className="flex items-center justify-center gap-1 mt-2">
                  <Heart className="w-3 h-3 text-primary fill-primary" />
                  <p className="text-xs text-muted-foreground font-serif">Forever</p>
                  <Heart className="w-3 h-3 text-primary fill-primary" />
                </div>
              </motion.div>

              {/* Floating hearts decoration */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute bottom-20 left-5 z-30"
              >
                <Heart className="w-8 h-8 text-primary fill-primary/50" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
                className="absolute top-32 right-0 z-30"
              >
                <Heart className="w-6 h-6 text-accent fill-accent/50" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center gap-2"
        >
          <Heart className="w-5 h-5 text-primary fill-primary/50" />
          <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
