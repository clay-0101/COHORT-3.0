import React from 'react'
import SavedQuestionCard from './SavedQuestionCard'
import { useSelector } from "react-redux"
import { BookmarkX } from "lucide-react"

const SavedPage = () => {
  const savedCards = useSelector((state) => state.saveQuiz.value) || []

  // 1. Conditional Rendering: Empty State Screen
  if (savedCards.length === 0) {
    return (
      <div className="flex min-h-[60vh] w-full flex-col items-center justify-center rounded-2xl border border-dashed border-[#DAD7C7] bg-[#FAF9F5] px-6 py-12 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF3DE] text-[#3B6D11]">
          <BookmarkX size={28} />
        </div>
        <h3 className="text-xl font-bold text-[#1C2B1E] mb-1">
          No Saved Questions Yet
        </h3>
        <p className="max-w-xs text-sm text-[#5E5C50]">
          Questions you bookmark will show up here so you can review them anytime.
        </p>
      </div>
    )
  }

  // 2. Normal List Rendering
  return (
    <div className="flex flex-col gap-4 w-full">
      {savedCards.map((item) => (
        <SavedQuestionCard key={item.id || item.question} item={item} />
      ))}
    </div>
  )
}

export default SavedPage