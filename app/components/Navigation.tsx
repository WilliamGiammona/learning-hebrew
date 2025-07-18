"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const verbTypes = [
  { href: "/verbs/paal", label: "Paal" },
  { href: "/verbs/piel", label: "Piel" },
  { href: "/verbs/hifil", label: "Hifil" },
  { href: "/verbs/hitpael", label: "Hitpael" },
  { href: "/verbs/hufal", label: "Hufal" },
  { href: "/verbs/pual", label: "Pual" },
  { href: "/verbs/nifal", label: "Nifal" },
];

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/jewish-history", label: "Jewish History" },
  { href: "/religious-history", label: "Religious History" },
  { href: "/alphabet", label: "Alphabet" },
  { href: "/verbs", label: "Verbs", hasDropdown: true },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVerbsOpen, setIsVerbsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-blue-800">
            Learning Hebrew
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {navigationItems.map((item) => (
              <div key={item.href} className="relative group">
                {item.hasDropdown ? (
                  <>
                    <button
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                        pathname.startsWith(item.href)
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                      }`}
                    >
                      {item.label}
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md py-2 border border-gray-200 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                      {verbTypes.map((verb) => (
                        <Link
                          key={verb.href}
                          href={verb.href}
                          className={`block px-4 py-2 text-sm font-medium transition-colors ${
                            pathname === verb.href
                              ? "bg-blue-100 text-blue-700"
                              : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                          }`}
                        >
                          {verb.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      pathname === item.href
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navigationItems.map((item) => (
              <div key={item.href}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center justify-between ${
                        pathname.startsWith(item.href)
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                      }`}
                      onClick={() => setIsVerbsOpen(!isVerbsOpen)}
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          isVerbsOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isVerbsOpen && (
                      <div className="pl-6 py-2 space-y-1">
                        {verbTypes.map((verb) => (
                          <Link
                            key={verb.href}
                            href={verb.href}
                            className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                              pathname === verb.href
                                ? "bg-blue-100 text-blue-700"
                                : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {verb.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      pathname === item.href
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
