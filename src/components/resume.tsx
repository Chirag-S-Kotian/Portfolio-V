"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const resumeFileUrl = "/c.pdf"

export default function Resume({ isDarkMode }: { isDarkMode: boolean }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`min-h-screen p-4 sm:p-6 lg:p-8 transition-colors duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white' 
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <motion.h1 
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
              isDarkMode 
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400' 
                : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'
            }`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Resume Preview
          </motion.h1>
          <motion.p 
            className={`text-sm sm:text-base lg:text-lg ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Chirag S Kotian - DevOps Engineer & Full Stack Developer
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <Card 
            className={`overflow-hidden transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-800/90 backdrop-blur-sm shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 border border-gray-700/50' 
                : 'bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl border-2 border-gray-200/50 hover:border-blue-300/50'
            }`}
          >
            <CardContent className="p-2 sm:p-4 lg:p-6">
              <motion.div 
                className="aspect-[8.5/11] w-full rounded-xl overflow-hidden shadow-inner"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <iframe
                  src={resumeFileUrl}
                  className="w-full h-full border-0 rounded-lg"
                  title="Resume Preview"
                />
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button 
            asChild 
            className={`group relative overflow-hidden rounded-full px-6 py-3 sm:px-8 sm:py-4 text-white shadow-lg transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:shadow-blue-500/50' 
                : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 hover:shadow-blue-500/50'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a href={resumeFileUrl} download className="flex items-center space-x-2 sm:space-x-3">
              <span className="relative z-10 font-semibold text-sm sm:text-base">Download Resume</span>
              <motion.div
                animate={{ y: isHovered ? 2 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Download className="h-4 w-4 sm:h-5 sm:w-5 relative z-10" />
              </motion.div>
              <motion.span 
                className={`absolute inset-0 h-full w-full ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'
                    : 'bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700'
                }`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </a>
          </Button>
        </motion.div>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-4 text-center"
            >
              <p className={`text-sm sm:text-base ${
                isDarkMode 
                  ? 'text-gray-300 bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm' 
                  : 'text-gray-600 bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm'
              }`}>
                Click to download the full resume
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}