"use client";
import AuthGuard from "../components/AuthGuard";
import { useState } from "react";

export default function ExamPage() {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [file, setFile] = useState<File | null>(null);

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Ikizamini</h1>
            <div className="text-gray-600">75% Complete</div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Ongoing Exams</h2>
            <div className="mb-6">
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-primary-gray rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

            <h3 className="text-lg font-bold mb-4 ">
              Final Mathematics Examination
            </h3>

            {/* Question 1 */}
            <div className="mb-8">
              <h4 className="font-bold mb-4 ">Question 1: Multiple Choice</h4>
              <p className="mb-4 text-sm">What is the square root of 144?</p>
              <div className="space-y-2">
                {["10", "12", "14"].map((option) => (
                  <label
                    key={option}
                    className="flex items-center space-x-2 text-sm"
                  >
                    <input
                      type="radio"
                      name="q1"
                      value={option}
                      checked={answer1 === option}
                      onChange={(e) => setAnswer1(e.target.value)}
                      className="form-radio"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Question 2 */}
            <div className="mb-8">
              <h4 className="font-bold mb-4">Question 2: Open-Ended</h4>
              <p className="mb-4 text-sm">
                Explain the Pythagorean theorem in your own words.
              </p>
              <textarea
                value={answer2}
                onChange={(e) => setAnswer2(e.target.value)}
                className="w-full h-32 p-2 border rounded-md text-sm"
                placeholder="Type your answer here (max 500 characters)"
                maxLength={500}
              ></textarea>
              <div className="text-right text-gray-600 mt-1 text-sm">
                Characters remaining: {500 - answer2.length}
              </div>
            </div>

            {/* Question 3 */}
            <div className="mb-8">
              <h4 className="font-bold mb-4">Question 3: Media Upload</h4>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center text-sm">
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="hidden"
                  id="file-upload"
                  accept=".jpg,.png,.mpa"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer text-primary-gray hover:text-primary-gray text-sm"
                >
                  Drag and drop files here or click to upload
                </label>
                {file && (
                  <p className="mt-2 text-sm text-gray-600">
                    Selected file: {file.name}
                  </p>
                )}
                <p className="mt-2 text-sm text-gray-400">
                  Supported formats: JPG, PNG, MPA (max 10MB)
                </p>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button className="px-4 py-2 font-[500] bg-gray-200 rounded-md hover:bg-gray-300">
                Save Progress
              </button>
              <button className="px-4 py-2 bg-primary-gray font-[500] text-white rounded-md hover:bg-primary-gray">
                Submit Exam
              </button>
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
