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
      className={`min-h-screen p-8 transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <motion.h1 
            className={`text-4xl font-bold ${
              isDarkMode 
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600' 
                : 'text-gray-800'
            }`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Resume Preview
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card 
            className={`mb-8 overflow-hidden transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-800 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40' 
                : 'bg-white shadow-md hover:shadow-lg border-2 border-gray-200 hover:border-pink-400'
            }`}
          >
            <CardContent className="p-1 sm:p-2">
              <motion.div 
                className="aspect-[8.5/11] w-full rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <iframe
                  src={resumeFileUrl}
                  className="w-full h-full border-0"
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
            className={`group relative overflow-hidden rounded-full px-6 py-3 text-white shadow-md transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:shadow-purple-500/50' 
                : 'bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black hover:shadow-gray-500/50'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a href={resumeFileUrl} download className="flex items-center space-x-2">
              <span className="relative z-10">Download Resume</span>
              <motion.div
                animate={{ y: isHovered ? 2 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Download className="h-5 w-5 relative z-10" />
              </motion.div>
              <motion.span 
                className={`absolute inset-0 h-full w-full ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                    : 'bg-gradient-to-r from-gray-800 to-black'
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
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Click to download the full resume
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}