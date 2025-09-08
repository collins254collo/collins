"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sample case studies
const caseStudies = [
  {
    title: "Reverse Linked List",
    tags: ["Linked List", "Pointers"],
    description: "Reverse a singly linked list in-place using three pointers.",
    code: `function reverseLinkedList(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}`,
    complexity: "Time: O(n), Space: O(1)",
    takeaway: "Improved pointer manipulation and in-place optimizations.",
    visualization: "1 → 2 → 3 → 4 → null  ⇒  4 → 3 → 2 → 1 → null",
  },
  {
    title: "Two Sum",
    tags: ["Arrays", "Hashing"],
    description: "Find two numbers in an array that sum up to a target.",
    code: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
}`,
    complexity: "Time: O(n), Space: O(n)",
    takeaway: "Learned how to leverage hash maps for constant-time lookups.",
    visualization: "[2,7,11,15], target=9  ⇒  indices [0,1]",
  },
];

export default function Blogs() {
  const [openIndex, setOpenIndex] = useState(null);
  const [filter, setFilter] = useState("");

  // Filtered list by tag or title
  const filteredStudies = caseStudies.filter(
    (study) =>
      study.title.toLowerCase().includes(filter.toLowerCase()) ||
      study.tags.some((tag) =>
        tag.toLowerCase().includes(filter.toLowerCase())
      )
  );

  return (
    <section className="p-10 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
           DSA Case Studies
        </h2>
        <p className="text-gray-600 mb-6">
          A collection of data structures & algorithms problems I solved, with
          code, complexity analysis, and key takeaways. Filter by topic to
          explore.
        </p>

        {/* Search bar */}
        <input
          type="text"
          placeholder="🔍 Search by title or tag..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full px-4 py-2 mb-8 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        {/* Case Studies */}
        <div className="space-y-6">
          {filteredStudies.length > 0 ? (
            filteredStudies.map((study, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
                whileHover={{ scale: 1.01 }}
              >
                {/* Header */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() =>
                    setOpenIndex(openIndex === idx ? null : idx)
                  }
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{study.description}</p>
                    <div className="mt-2 flex gap-2 flex-wrap">
                      {study.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-blue-600 font-bold text-lg">
                    {openIndex === idx ? "▲" : "▼"}
                  </span>
                </div>

                {/* Expandable content */}
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 overflow-hidden"
                    >
                      {/* Code block */}
                      <pre className="bg-gray-900 text-green-300 p-4 rounded-lg text-sm overflow-x-auto">
                        <code>{study.code}</code>
                      </pre>

                      {/* Extra details */}
                      <p className="mt-3 text-sm font-mono text-blue-600">
                        {study.complexity}
                      </p>
                      <p className="mt-2 text-gray-700">
                        <strong>Visualization:</strong> {study.visualization}
                      </p>
                      <p className="mt-2 text-gray-700">
                        <strong>Takeaway:</strong> {study.takeaway}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-500 italic">No case studies found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
