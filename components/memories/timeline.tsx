"use client"

import { motion } from "framer-motion"
import { Calendar, Heart, Camera, Video, Sparkles, MapPin } from "lucide-react"

const timelineEvents = [
  {
    year: " 20 maret 2026",
    title: "awal pdkt",
    description: "berawal dari reply story ig.",
    icon: Sparkles,
    stats: { photos: 1, videos: 0 },
    image: "https://res.cloudinary.com/dohwfmj5l/image/upload/v1777098672/IMG_1964_dkle3n.jpg",
  },
  
  {
    year: " 28 maret 2026",
    title: "first time kita jalan",
    description: "Pertemuan pertama yang tak terlupakan, penuh tawa dan chemistry yang langsung terasa.",
    icon: Camera,
    stats: { photos: 4, videos: 2 },
    image: "https://res.cloudinary.com/dohwfmj5l/image/upload/v1776781291/IMG_1139_zdnwvg.jpg",
    location: "xxi lipo mall dan klop ",
  },
  
]

export function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-card relative overflow-hidden">
      {/* Background Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.1 }}
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4 + i,
              delay: i * 0.5
            }}
            className="absolute"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`
            }}
          >
            <Heart className="w-8 h-8 text-primary/10 fill-primary/5" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
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
            Perjalanan Cinta Kita
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Setiap momen adalah kisah, setiap tahun adalah babak baru dalam cerita cinta kita
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line with Hearts */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary -translate-x-1/2 hidden md:block" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Year Badge (Center on desktop) */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full items-center justify-center shadow-lg shadow-primary/30"
              >
                <Heart className="w-7 h-7 text-primary-foreground fill-primary-foreground" />
              </motion.div>

              {/* Content Card */}
              <div className={`w-full md:w-[calc(50%-4rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-background rounded-3xl p-6 shadow-xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  {/* Mobile Year Badge */}
                  <div className="flex items-center gap-3 mb-4 md:hidden">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                      <Heart className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
                    </div>
                    <span className="text-2xl font-serif font-bold text-primary">{event.year}</span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2 hidden md:flex items-center gap-2">
                    <span className="text-primary">{event.year}</span> 
                    <Heart className="w-4 h-4 text-accent fill-accent" />
                    {event.title}
                  </h3>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2 md:hidden flex items-center gap-2">
                    {event.title}
                    <Heart className="w-4 h-4 text-accent fill-accent" />
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm flex-wrap">
                    <div className="flex items-center gap-2 text-muted-foreground bg-primary/5 px-3 py-1.5 rounded-full">
                      <Camera className="w-4 h-4 text-primary" />
                      <span>{event.stats.photos} foto</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground bg-accent/5 px-3 py-1.5 rounded-full">
                      <Video className="w-4 h-4 text-accent" />
                      <span>{event.stats.videos} video</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Image */}
              <div className={`w-full md:w-[calc(50%-4rem)] ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}>
                <motion.div
                  whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 2 : -2 }}
                  className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-card"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                  
                  {/* Heart decoration */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm p-2 rounded-full shadow-lg"
                  >
                    <Heart className="w-5 h-5 text-primary fill-primary" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
