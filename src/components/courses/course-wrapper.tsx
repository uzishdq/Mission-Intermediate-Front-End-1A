import { useState } from "react";
import { DataCourses } from "../../data/constant";
import CourseCard from "./course-card";
import CourseCardSkeleton from "./course-card-skeleton";

const tabs = [
  { label: "Semua Kelas", value: "all" },
  { label: "Pemasaran", value: "pemasaran" },
  { label: "Desain", value: "desain" },
  { label: "Pengembangan Diri", value: "pengembangan" },
  { label: "Bisnis", value: "bisnis" },
];

export default function CoursesWrapper() {
  const [activeTab, setActiveTab] = useState("all");
  const [loading, setLoading] = useState(false);

  const filteredCourses =
    activeTab === "all"
      ? DataCourses
      : DataCourses.filter((course) => course.category === activeTab);

  const handleTabClick = (tabValue: string) => {
    setActiveTab(tabValue);
    setLoading(true);

    setTimeout(() => setLoading(false), 300);
  };

  return (
    <section className="py-20">
      <div className="max-w-300 mx-auto px-8">
        <div className="mb-12 text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Koleksi Video Pembelajaran Unggulan
          </h2>
          <p className="text-base text-gray-500">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
        </div>

        <div className="flex gap-8 mb-12 overflow-x-auto whitespace-nowrap px-4 scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => handleTabClick(tab.value)}
              className={`relative text-base font-semibold py-2 transition-colors whitespace-nowrap ${
                activeTab === tab.value
                  ? "text-orange-500"
                  : "text-gray-400 hover:text-orange-500"
              }`}
            >
              {tab.label}
              {activeTab === tab.value && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 rounded"></span>
              )}
            </button>
          ))}
        </div>

        {filteredCourses.length === 0 ? (
          <div className="text-center p-10 text-gray-400 text-base font-medium border-2 border-dashed border-gray-200 rounded-lg bg-gray-50">
            Belum ada course di kategori ini.
          </div>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <CourseCardSkeleton key={i} />
                ))
              : filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
          </div>
        )}
      </div>
    </section>
  );
}
