"use client"

import { useState, useEffect, useMemo } from "react"

interface TypewriterProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  className?: string
}

export function Typewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDuration = 2000,
  className = "",
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const longestWord = useMemo(() => {
    return words.reduce((a, b) => (a.length > b.length ? a : b), "")
  }, [words])

  useEffect(() => {
    const currentWord = words[currentWordIndex]

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseDuration)
      return () => clearTimeout(pauseTimeout)
    }

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      } else {
        const deleteTimeout = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1))
        }, deletingSpeed)
        return () => clearTimeout(deleteTimeout)
      }
    } else {
      if (currentText === currentWord) {
        setIsPaused(true)
      } else {
        const typeTimeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1))
        }, typingSpeed)
        return () => clearTimeout(typeTimeout)
      }
    }
  }, [currentText, isDeleting, isPaused, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className={`inline-block ${className}`}>
      {/* Invisible text to reserve space for the longest word */}
      <span className="invisible absolute" aria-hidden="true">
        {longestWord}
      </span>
      {/* Visible animated text */}
      <span className="relative">
        {currentText}
        <span className="inline-block w-[3px] h-[0.85em] bg-accent ml-0.5 animate-blink align-middle" />
      </span>
    </span>
  )
}
