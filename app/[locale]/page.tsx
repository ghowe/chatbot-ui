"use client"

import { ChatbotUISVG } from "@/components/icons/chatbotui-svg"
import { IconArrowRight } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import Link from "next/link"

export default function HomePage() {
  const { theme } = useTheme()

  return (
    <div className="flex size-full flex-col items-center justify-center">
      <div>
        <ChatbotUISVG theme={theme === "dark" ? "dark" : "light"} scale={0.3} />
      </div>

      <div className="mt-2 text-4xl font-bold">MyLifeCare.ai</div>

      <div className="mt-2 text-center">
        <br />
        This tool does not provide medical advice It is intended for research &
        informational purposes only. <br />
        It is not a substitute for professional medical advice, diagnosis or
        treatment. <br />
        Never ignore professional medical advice in seeking treatment because of
        something you have read on the MyLifeCare.ai Site. <br />
        If you think you may have a medical emergency, immediately call your
        doctor or dial 911.
      </div>
      <Link
        className="mt-4 flex w-[200px] items-center justify-center rounded-md bg-blue-500 p-2 font-semibold"
        href="/login"
      >
        Acknowledge
        <IconArrowRight className="ml-1" size={20} />
      </Link>
    </div>
  )
}
