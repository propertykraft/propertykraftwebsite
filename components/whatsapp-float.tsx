"use client";

import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

export function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/2348165490072", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Ripple Effect */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
      <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-30 animation-delay-1000"></div>

      {/* Main Button */}
      <Button
        onClick={handleWhatsAppClick}
        className="relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-bounce-gentle"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
}
